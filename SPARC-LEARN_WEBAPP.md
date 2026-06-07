# SPARC Web Application: Client-Side AI Deep Dive

Welcome to the **Web Application** technical guide for the SPARC system. This document explains the architecture of the web-based version of SPARC (`SPARC_web/app.js` and `index.html`). 

This project demonstrates a critical modern skill: **Client-Side Edge AI**. Instead of sending video frames to a server (which causes latency and privacy issues), the AI models run directly inside the user's web browser using JavaScript!

## 1. The Architecture (100% Client-Side)

The SPARC WebApp is a Single Page Application (SPA). The backend `server.py` merely serves the static files (HTML/JS/CSS). All heavy lifting is done in the browser.

### The JavaScript Engine (`app.js`)
The `SPARCApp` JavaScript class manages the entire application state. It initializes hardware (webcam, microphone) and coordinates the AI models.

## 2. In-Browser Computer Vision (TensorFlow.js)

To achieve zero-latency AI, the app utilizes **TensorFlow.js (tfjs)**.

### Object Detection (`cocoSsd`)
- **How it works**: The app loads the pre-trained `COCO-SSD` model (Common Objects in Context - Single Shot MultiBox Detector).
- **The Pipeline**:
  1. The HTML5 `<video>` element (`cameraFeed`) captures the webcam stream.
  2. A recursive `requestAnimationFrame(detectionLoop)` function continuously grabs frames.
  3. `this.yoloModel.detect(this.elements.cameraFeed)` is called. The model analyzes the pixels and returns bounding boxes, classes (e.g., "Person", "Cup"), and confidence scores.
  4. The bounding boxes are drawn onto an overlay `<canvas>` using standard HTML5 Canvas 2D Context (`this.ctx`).

### Gesture Recognition (`handpose`)
- **How it works**: The app uses the TFJS `handpose` model to extract 21 3D hand landmarks in real-time, just like MediaPipe does in the Python firmware.
- **Gesture Heuristics**: Instead of running a complex machine learning model in the browser for classification, the `app.js` script maps out predefined finger states:
  - For example, the letter 'A' is mapped to `[0, 1, 1, 1, 1]` (Thumb down, other fingers up).
  - The script calculates the distance between the tips of the fingers and the palm base to determine if a finger is "up" (1) or "down" (0).
  - It then matches this binary array against a dictionary of known gestures (Characters, Numbers, Words).

## 3. Multimodal Voice Control (Web Speech API)

The WebApp is fully accessible and can be controlled hands-free via voice commands.

- **Implementation**: It uses the native browser `SpeechRecognition` API (or `webkitSpeechRecognition`).
- **Continuous Listening**: The recognition engine is set to `continuous = true`. 
- **Command Router**: When the API fires the `onresult` event, the transcript is parsed against a dictionary of commands (`this.voiceCommands`).
  - Example: If the user says *"mode 1"* or *"object detection"*, it triggers `this.setMode(1)`.
  - Example: If the user says *"announce"*, it triggers `this.announceResults()`.
- **Speech Synthesis**: To talk back to the user, the app uses `window.speechSynthesis.speak()`, allowing the browser to act as a TTS engine natively without downloading MP3s.

## 4. UI/UX and State Management

- **DOM Manipulation**: The app avoids heavy frameworks like React and instead uses Vanilla JS to directly manipulate DOM elements (e.g., `document.getElementById('loading-screen').classList.add('hidden')`).
- **Throttling**: To prevent the browser from crashing, the `requestAnimationFrame` loop is throttled. For example, object detection is limited to running once every 200ms (`if (currentTime - this.lastDetectionTime > 200)`). This ensures the UI thread remains responsive.

## 📝 Interview Talking Points

If asked about your web development and AI experience, mention:
1. **Client-Side AI vs Server-Side AI**: *"For the SPARC WebApp, I intentionally chose to run TensorFlow.js models (COCO-SSD and Handpose) directly in the browser. This eliminated server round-trip latency, reduced server hosting costs to zero, and completely resolved user privacy concerns since camera data never leaves the device."*
2. **Performance Optimization**: *"Running deep learning in a browser can freeze the UI thread. I optimized this by throttling the object detection inference loop to 5 FPS using timestamp deltas within `requestAnimationFrame`, ensuring the animations and DOM updates remained smooth at 60 FPS."*
3. **Accessibility Integration**: *"I integrated the Web Speech API and Speech Synthesis API to create a fully hands-free, bidirectional voice interface, routing NLP transcripts to function calls programmatically."*
