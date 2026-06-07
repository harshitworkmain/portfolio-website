# SPARC: The Future of Communication

## Overview

SPARC (Sign Language Processing and Recognition Computer) is a comprehensive, modular sign language recognition system designed for Raspberry Pi. It provides real-time sign language recognition, emotion detection, and multimodal communication capabilities with graceful hardware fallback support.

SPARC supports both **Indian Sign Language (ISL)** and **American Sign Language (ASL)**, making it a versatile tool for sign language communication and learning.

## Features

### Core Capabilities

- **Sign Language Recognition**
  - Support for ISL (Indian Sign Language) and ASL (American Sign Language)
  - Multiple recognition modes: Characters (A-Z), Numbers (1-9), and Words
  - Real-time hand gesture tracking using MediaPipe/CVZone
  - Sentence building with backspace and completion functionality
  - Text-to-Speech (TTS) output for recognized gestures

- **Emotion Detection**
  - Real-time facial emotion recognition
  - Supports: Angry, Happy, Neutral, Sad
  - Visual feedback with emoji representation
  - Integration with gesture recognition for enhanced communication

- **Multimodal Interface**
  - OLED display support (128x64) with calibration
  - Text-to-Speech audio output
  - Voice input support (optional)
  - Keyboard input for mode switching

- **Hardware Flexibility**
  - Graceful fallback for missing hardware components
  - USB webcam support (primary camera)
  - Works with or without OLED display
  - Extended compatibility with Intel RealSense cameras for additional features (optional)

## Project Structure

```
SPARC/
├── main.py                          # Main entry point
├── config/
│   └── settings.py                  # Configuration settings
├── gestures/
│   └── gesture_recognizer.py        # Core gesture recognition engine
├── emotions/
│   └── emotion_detector.py          # Emotion detection module
├── services/
│   ├── display.py                   # OLED display service
│   ├── audio.py                     # TTS audio service
│   └── logger.py                    # Logging service
├── cameras/
│   └── realsense_manager.py         # RealSense camera manager (extended compatibility)
├── Face_Recognition/                # Face recognition models
├── Indian-Sign-Language-Detection/  # ISL model and utilities
├── requirements.txt                 # Python dependencies
└── README.md                        # This file
```

## Requirements

### Hardware

- **Raspberry Pi** (recommended: Pi 4 or newer)
- **Camera**: USB webcam (primary)
- **OLED Display**: Waveshare 1.51" OLED (optional, 128x64)
- **Audio**: Speakers/headphones for TTS output
- **Microphone**: Bluetooth or USB microphone (optional, for voice input)

### Extended Hardware Compatibility

- **Intel RealSense Cameras**: Optional additional hardware for extended compatibility and advanced features

### Software Dependencies

#### System Packages
```bash
sudo apt-get update
sudo apt-get install -y mpg123 libportaudio2 python3-pip python3-venv
```

#### Python Packages
See `requirements.txt` for complete list. Main dependencies include:
- `opencv-python` - Computer vision
- `numpy`, `pandas` - Data processing
- `gTTS` - Text-to-speech
- `cvzone` - Hand tracking
- `joblib` - Model loading
- `tensorflow` - Deep learning models
- `pygame` - Audio playback
- `SpeechRecognition`, `pyaudio` - Voice input
- `Pillow` - Image processing
- `pyrealsense2` - RealSense support (optional, for extended compatibility)

## Installation

### 1. Clone or Navigate to Project
```bash
cd /home/pi/SPARC
```

### 2. Create Virtual Environment (Recommended)
```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Python Dependencies
```bash
pip install -r requirements.txt
```

### 4. Model Files Setup

#### Gesture Recognition Models

**For ISL (Indian Sign Language):**
- Place ISL model at: `/home/pi/SPARC/Indian-Sign-Language-Detection/model.h5`

**For ASL (American Sign Language):**
- Place ASL numbers model at: `/home/pi/SPARC/RFC_MODEL_2_0_9_modes.pkl`
- Place ASL characters model at: `/home/pi/SPARC/RFC_MODEL_3_A_Z_modes.pkl`
- (Optional) Place ASL words model at: `/home/pi/gesture-to-audio/models/words/set1/RFC_MODEL_WORDS_SET_1.pkl`

#### Emotion Detection Model
- Place emotion model at: `/home/pi/SPARC/Face_Recognition/model.h5`
- Haar cascade at: `/home/pi/SPARC/Face_Recognition/src/haarcascade_frontalface_default.xml`

### 5. OLED Display Setup (Optional)

If using OLED display:
1. Install Waveshare OLED library dependencies
2. Run calibration tool:
   ```bash
   python calibrate_display_interactive.py
   ```
3. Configuration is automatically saved and persisted

## Usage

### Starting SPARC

```bash
cd /home/pi/SPARC
source .venv/bin/activate  # If using virtual environment
python main.py
```

### Language Mode Selection

On startup, SPARC will prompt you to select a language mode:
- **1** or **ISL** - Indian Sign Language
- **2** or **ASL** - American Sign Language

### Main Menu Commands

Once running, you can use the following commands:

- **1** or **gesture** - Enter gesture recognition mode
- **n** or **number** - Switch to number mode (1-9)
- **c** or **character** - Switch to character mode (A-Z)
- **w** or **word** - Switch to word mode (if model available)
- **q** or **quit** - Exit SPARC

### Gesture Recognition Mode

1. Select gesture mode from main menu
2. Position your hand in front of the camera
3. Make sign language gestures
4. Recognized gestures appear on OLED (if available) and are spoken via TTS
5. Build sentences by continuing to gesture
6. Use backspace gesture to delete last character
7. Complete sentence gesture to finish and speak the sentence

### Mode Switching

You can switch between recognition modes at any time:
- **Character Mode**: Recognizes letters A-Z
- **Number Mode**: Recognizes numbers 1-9
- **Word Mode**: Recognizes predefined words (if model available)

## Configuration

### Settings File

Main configuration is in `config/settings.py`. Key settings include:

- **Video Settings**: Frame width, height, FPS
- **Gesture Settings**: Confidence threshold
- **Audio Settings**: TTS language, temporary directory
- **OLED Settings**: Font sizes, line heights, margins
- **Voice Input Settings**: Microphone preferences, recognition parameters

### Display Calibration

OLED display calibration is persisted automatically. To recalibrate:
```bash
python calibrate_display_interactive.py
```

### Voice Input Configuration

Voice input settings can be configured in `config/settings.py`:
- Microphone device selection
- Speech recognition parameters
- Bluetooth microphone preferences

## Architecture

### Modular Design

SPARC follows a modular architecture with clear separation of concerns:

- **Services Layer**: Display, Audio, Logging services
- **Recognition Layer**: Gesture recognition (ISL/ASL), Emotion detection
- **Hardware Layer**: Camera management, display drivers
- **Configuration Layer**: Centralized settings management

### Graceful Degradation

SPARC is designed to work with partial hardware:
- **No OLED**: Logs to console instead
- **USB Webcam**: Primary camera input (works with standard USB webcams)
- **No TTS**: Logs text instead of speaking
- **No Models**: Gracefully handles missing models with error messages
- **RealSense**: Optional extended compatibility hardware (falls back to USB webcam if not available)

## Troubleshooting

### Common Issues

**Camera Not Detected**
- Check USB camera connection
- Verify camera permissions: `sudo usermod -a -G video $USER`
- Try different USB port

**OLED Display Not Working**
- Verify SPI is enabled: `sudo raspi-config` → Interface Options → SPI
- Check wiring connections
- Run calibration: `python calibrate_display_interactive.py`

**TTS Not Working**
- Verify `mpg123` is installed: `sudo apt-get install mpg123`
- Check audio output device: `aplay -l`
- Test audio: `speaker-test -t wav`

**Models Not Loading**
- Verify model file paths in `config/settings.py`
- Check file permissions
- Ensure models are in correct format (`.pkl` for ASL, `.h5` for ISL/emotions)

**RealSense Extended Compatibility** (Optional)
- RealSense cameras are optional extended compatibility hardware
- If using RealSense: Install RealSense SDK following Intel RealSense setup guide
- Verify camera connection: `rs-enumerate-devices`
- System automatically falls back to USB webcam if RealSense unavailable

**Voice Input Issues**
- Check microphone permissions
- Verify PyAudio installation
- Test microphone: `python -c "import pyaudio; print('OK')"`
- Configure preferred microphone in `config/settings.py`

### Debug Mode

Enable verbose logging by setting environment variable:
```bash
export SPARC_DEBUG=1
python main.py
```

## Development

### Code Standards

- Type hints for all functions
- Modular code structure (<300 lines per module)
- Defensive programming: check hardware before use
- Clear docstrings for all classes and functions
- No global state

### Testing

Run smoke test (no camera windows):
```bash
ENV=CI python main.py
```

### Adding New Features

1. Follow modular architecture
2. Add configuration to `config/settings.py`
3. Implement graceful fallback for missing hardware
4. Update this README

## Model Information

### ISL Model
- Format: Keras/TensorFlow (`.h5`)
- Supports: Numbers 1-9, Letters A-Z
- Input: Hand landmarks (21 points)

### ASL Models
- Format: Joblib (`.pkl`)
- Separate models for numbers and characters
- Optional words model for common phrases

### Emotion Model
- Format: Keras/TensorFlow (`.h5`)
- Supports: Angry, Happy, Neutral, Sad
- Input: 48x48 grayscale face images

## License

[Specify your license here]

## Contributing

[Add contribution guidelines if applicable]

## Acknowledgments

- MediaPipe for hand tracking
- Waveshare for OLED display drivers
- Intel for RealSense SDK (extended compatibility)
- TensorFlow/Keras community

## Support

For issues, questions, or contributions, please [add your contact/support information].

---

**SPARC: Bridging communication through technology**
