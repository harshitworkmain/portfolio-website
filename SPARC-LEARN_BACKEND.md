# SPARC Backend & Networking: A Deep Dive

Welcome to the **Backend** technical guide for the SPARC system. This document explains the server-side architecture that powers the SPARC application ecosystem.

In the SPARC architecture, there are two distinct paradigms for processing data:
1. **The Edge Firmware (`main.py`)**: Runs heavy Python logic directly on the host machine.
2. **The Web Server (`server.py`)**: Serves the Client-Side AI web application.

## 1. The Web Server (`server.py`)

The WebApp requires a backend server to function. You might wonder, *if the AI runs in the browser, why do we need a Python backend at all?*

### The CORS Problem
If you simply double-click `index.html` to open it in Chrome, the browser loads it via the `file://` protocol. Modern browsers have strict security policies that prevent JavaScript from loading external assets (like TensorFlow.js AI models or accessing the webcam) from a `file://` context due to Cross-Origin Resource Sharing (CORS) restrictions.

### The Solution: Custom HTTP Handler
The `server.py` script acts as a lightweight HTTP proxy to bypass these restrictions.
- It inherits from Python's standard `http.server.SimpleHTTPRequestHandler`.
- It overrides the `end_headers()` method to manually inject CORS headers:
  ```python
  def end_headers(self):
      self.send_header('Access-Control-Allow-Origin', '*')
      self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      self.send_header('Access-Control-Allow-Headers', 'Content-Type')
      super().end_headers()
  ```
- By running `server.py`, the WebApp is served over `http://localhost:8080`, placing it in a trusted HTTP context, allowing the webcam and AI models to initialize perfectly.

## 2. The Integrated Monolith (`SPARC_web/main.py`)

In addition to the WebApp, the repository contains a massive, monolithic Python script that integrates *everything* into a single execution thread.

### System Integration
This script is a masterclass in integrating multiple complex Python libraries:
- **`cvzone.HandTrackingModule`**: MediaPipe wrapper for hand landmarks.
- **`ultralytics.YOLO`**: For object detection.
- **`pyrealsense2`**: Intel RealSense depth camera SDK.
- **`speech_recognition`**: PyAudio wrapper for voice commands.
- **`pygame` / `gTTS`**: Audio playback and Text-To-Speech generation.

### The Event Loop Architecture
Since Python's Global Interpreter Lock (GIL) makes true multithreading difficult for CPU-bound tasks like image processing, the `main.py` script relies on a sophisticated synchronous event loop (`while self.running:`):
1. **Frame Capture**: Pulls a frame from either the RealSense pipeline or OpenCV fallback.
2. **State Check**: Evaluates `self.currentMode` (Object Detection vs. Gesture Recognition).
3. **Inference**: Passes the frame to either YOLO or MediaPipe.
4. **Drawing**: Uses OpenCV (`cv2.putText`, `cv2.rectangle`) to draw bounding boxes or gesture text onto the frame matrix.
5. **UI Rendering**: Pushes the modified frame to a `cv2.imshow` window and simultaneously updates the `waveshare_OLED` display buffer.
6. **Input Listening**: Uses `cv2.waitKey(1)` as a non-blocking keyboard listener to catch mode-switching hotkeys without pausing the video feed.

## 📝 Interview Talking Points

If asked about your backend and systems engineering experience, mention:
1. **Network Security & CORS**: *"When deploying the client-side AI web application, I ran into CORS protocol blocks when trying to load TensorFlow.js models. I engineered a lightweight Python HTTP server that dynamically injects `Access-Control-Allow-Origin: *` headers, resolving the security blocks without needing a heavy framework like Django or Flask."*
2. **Event Loop Design**: *"In the Python implementation, integrating Speech Recognition, YOLOv8, and MediaPipe simultaneously required careful event loop management. I designed a non-blocking main loop that uses `cv2.waitKey()` to handle asynchronous user input while maintaining a high FPS inference pipeline."*
