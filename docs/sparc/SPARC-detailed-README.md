# Project Portfolio

This repository contains four interconnected projects focused on sign language recognition, emotion detection, and communication enhancement. Each project can be used independently or integrated together.

---

## Project 1: SPARC - The Future of Communication

### Overview

SPARC (Sign Language Processing and Recognition Computer) is a comprehensive, modular sign language recognition system designed for Raspberry Pi. It provides real-time sign language recognition, emotion detection, and multimodal communication capabilities with graceful hardware fallback support.

SPARC supports both **Indian Sign Language (ISL)** and **American Sign Language (ASL)**, making it a versatile tool for sign language communication and learning.

### Features

#### Core Capabilities

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

### Project Structure

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

### Requirements

#### Hardware

- **Raspberry Pi** (recommended: Pi 4 or newer)
- **Camera**: USB webcam (primary)
- **OLED Display**: Waveshare 1.51" OLED (optional, 128x64)
- **Audio**: Speakers/headphones for TTS output
- **Microphone**: Bluetooth or USB microphone (optional, for voice input)

#### Extended Hardware Compatibility

- **Intel RealSense Cameras**: Optional additional hardware for extended compatibility and advanced features

#### Software Dependencies

##### System Packages
```bash
sudo apt-get update
sudo apt-get install -y mpg123 libportaudio2 python3-pip python3-venv
```

##### Python Packages
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

### Installation

#### 1. Clone or Navigate to Project
```bash
cd /home/pi/SPARC
```

#### 2. Create Virtual Environment (Recommended)
```bash
python3 -m venv .venv
source .venv/bin/activate
```

#### 3. Install Python Dependencies
```bash
pip install -r requirements.txt
```

#### 4. Model Files Setup

##### Gesture Recognition Models

**For ISL (Indian Sign Language):**
- Place ISL model at: `/home/pi/SPARC/Indian-Sign-Language-Detection/model.h5`

**For ASL (American Sign Language):**
- Place ASL numbers model at: `/home/pi/SPARC/RFC_MODEL_2_0_9_modes.pkl`
- Place ASL characters model at: `/home/pi/SPARC/RFC_MODEL_3_A_Z_modes.pkl`
- (Optional) Place ASL words model at: `/home/pi/gesture-to-audio/models/words/set1/RFC_MODEL_WORDS_SET_1.pkl`

##### Emotion Detection Model
- Place emotion model at: `/home/pi/SPARC/Face_Recognition/model.h5`
- Haar cascade at: `/home/pi/SPARC/Face_Recognition/src/haarcascade_frontalface_default.xml`

#### 5. OLED Display Setup (Optional)

If using OLED display:
1. Install Waveshare OLED library dependencies
2. Run calibration tool:
   ```bash
   python calibrate_display_interactive.py
   ```
3. Configuration is automatically saved and persisted

### Usage

#### Starting SPARC

```bash
cd /home/pi/SPARC
source .venv/bin/activate  # If using virtual environment
python main.py
```

#### Language Mode Selection

On startup, SPARC will prompt you to select a language mode:
- **1** or **ISL** - Indian Sign Language
- **2** or **ASL** - American Sign Language

#### Main Menu Commands

Once running, you can use the following commands:

- **1** or **gesture** - Enter gesture recognition mode
- **n** or **number** - Switch to number mode (1-9)
- **c** or **character** - Switch to character mode (A-Z)
- **w** or **word** - Switch to word mode (if model available)
- **q** or **quit** - Exit SPARC

#### Gesture Recognition Mode

1. Select gesture mode from main menu
2. Position your hand in front of the camera
3. Make sign language gestures
4. Recognized gestures appear on OLED (if available) and are spoken via TTS
5. Build sentences by continuing to gesture
6. Use backspace gesture to delete last character
7. Complete sentence gesture to finish and speak the sentence

#### Mode Switching

You can switch between recognition modes at any time:
- **Character Mode**: Recognizes letters A-Z
- **Number Mode**: Recognizes numbers 1-9
- **Word Mode**: Recognizes predefined words (if model available)

### Configuration

#### Settings File

Main configuration is in `config/settings.py`. Key settings include:

- **Video Settings**: Frame width, height, FPS
- **Gesture Settings**: Confidence threshold
- **Audio Settings**: TTS language, temporary directory
- **OLED Settings**: Font sizes, line heights, margins
- **Voice Input Settings**: Microphone preferences, recognition parameters

#### Display Calibration

OLED display calibration is persisted automatically. To recalibrate:
```bash
python calibrate_display_interactive.py
```

#### Voice Input Configuration

Voice input settings can be configured in `config/settings.py`:
- Microphone device selection
- Speech recognition parameters
- Bluetooth microphone preferences

### Architecture

#### Modular Design

SPARC follows a modular architecture with clear separation of concerns:

- **Services Layer**: Display, Audio, Logging services
- **Recognition Layer**: Gesture recognition (ISL/ASL), Emotion detection
- **Hardware Layer**: Camera management, display drivers
- **Configuration Layer**: Centralized settings management

#### Graceful Degradation

SPARC is designed to work with partial hardware:
- **No OLED**: Logs to console instead
- **USB Webcam**: Primary camera input (works with standard USB webcams)
- **No TTS**: Logs text instead of speaking
- **No Models**: Gracefully handles missing models with error messages
- **RealSense**: Optional extended compatibility hardware (falls back to USB webcam if not available)

### Troubleshooting

#### Common Issues

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

#### Debug Mode

Enable verbose logging by setting environment variable:
```bash
export SPARC_DEBUG=1
python main.py
```

### Development

#### Code Standards

- Type hints for all functions
- Modular code structure (<300 lines per module)
- Defensive programming: check hardware before use
- Clear docstrings for all classes and functions
- No global state

#### Testing

Run smoke test (no camera windows):
```bash
ENV=CI python main.py
```

#### Adding New Features

1. Follow modular architecture
2. Add configuration to `config/settings.py`
3. Implement graceful fallback for missing hardware
4. Update this README

### Model Information

#### ISL Model
- Format: Keras/TensorFlow (`.h5`)
- Supports: Numbers 1-9, Letters A-Z
- Input: Hand landmarks (21 points)

#### ASL Models
- Format: Joblib (`.pkl`)
- Separate models for numbers and characters
- Optional words model for common phrases

#### Emotion Model
- Format: Keras/TensorFlow (`.h5`)
- Supports: Angry, Happy, Neutral, Sad
- Input: 48x48 grayscale face images

### License

[Specify your license here]

### Contributing

[Add contribution guidelines if applicable]

### Acknowledgments

- MediaPipe for hand tracking
- Waveshare for OLED display drivers
- Intel for RealSense SDK (extended compatibility)
- TensorFlow/Keras community

### Support

For issues, questions, or contributions, please [add your contact/support information].

---

**SPARC: Bridging communication through technology**

---

## Project 2: Emotion Detection Using Deep Learning

### Introduction

This project aims to classify the emotion on a person's face into one of **seven categories**, using deep convolutional neural networks. The model is trained on the **FER-2013** dataset which was published on International Conference on Machine Learning (ICML). This dataset consists of 35887 grayscale, 48x48 sized face images with **seven emotions** - angry, disgusted, fearful, happy, neutral, sad and surprised.

### Dependencies

* Python 3, [OpenCV](https://opencv.org/), [Tensorflow](https://www.tensorflow.org/)
* To install the required packages, run `pip install -r requirements.txt`.

### Basic Usage

The repository is currently compatible with `tensorflow-2.0` and makes use of the Keras API using the `tensorflow.keras` library.

* First, clone the repository and enter the folder

```bash
git clone https://github.com/atulapra/Emotion-detection.git
cd Emotion-detection
```

* Download the FER-2013 dataset inside the `src` folder.

* If you want to train this model, use:  

```bash
cd src
python emotions.py --mode train
```

* If you want to view the predictions without training again, you can download the pre-trained model from [here](https://drive.google.com/file/d/1FUn0XNOzf-nQV7QjbBPA6-8GLoHNNgv-/view?usp=sharing) and then run:  

```bash
cd src
python emotions.py --mode display
```

* The folder structure is of the form:  
  src:
  * data (folder)
  * `emotions.py` (file)
  * `haarcascade_frontalface_default.xml` (file)
  * `model.h5` (file)

* This implementation by default detects emotions on all faces in the webcam feed. With a simple 4-layer CNN, the test accuracy reached 63.2% in 50 epochs.

![Accuracy plot](imgs/accuracy.png)

### Data Preparation (optional)

* The [original FER2013 dataset in Kaggle](https://www.kaggle.com/deadskull7/fer2013) is available as a single csv file. I had converted into a dataset of images in the PNG format for training/testing.

* In case you are looking to experiment with new datasets, you may have to deal with data in the csv format. I have provided the code I wrote for data preprocessing in the `dataset_prepare.py` file which can be used for reference.

### Algorithm

* First, the **haar cascade** method is used to detect faces in each frame of the webcam feed.

* The region of image containing the face is resized to **48x48** and is passed as input to the CNN.

* The network outputs a list of **softmax scores** for the seven classes of emotions.

* The emotion with maximum score is displayed on the screen.

### References

* "Challenges in Representation Learning: A report on three machine learning contests." I Goodfellow, D Erhan, PL Carrier, A Courville, M Mirza, B
   Hamner, W Cukierski, Y Tang, DH Lee, Y Zhou, C Ramaiah, F Feng, R Li,  
   X Wang, D Athanasakis, J Shawe-Taylor, M Milakov, J Park, R Ionescu,
   M Popescu, C Grozea, J Bergstra, J Xie, L Romaszko, B Xu, Z Chuang, and
   Y. Bengio. arXiv 2013.

---

## Project 3: Word Level Indian Sign Language Recognition

### Overview

This project aims to bridge the communication gap for the deaf community by providing them with a mobile/web app that predicts the meaning of sign gestures captured in a video, allowing them to interact with non-sign language users effectively.

#### Brief Explanation

- This project is aimed at developing a word-level Indian Sign Language (ISL) recognition system on Videos. Sign language is an action word which cannot be encompassed in a single frame, so a video of 2-3 seconds is required to determine the word signified by the action. The project's primary objective is to bridge the communication gap for the deaf community by enabling them to interact with non-sign language users effectively. The code sample provided here showcases the functionality of the system, demonstrating how it processes video input to recognize and predict the words signified by specific sign language actions.

- The code begins by accepting a video feed, which can be obtained from various sources such as a camera, a saved video file, or a web application. From this feed, the system selects 45 frames evenly to ensure it doesn't lose information if number of frames is greater than 45 in videos. Using Mediapipe PoseNet, an advanced pose-estimation model, the code detects and captures key body, left hand, and right-hand coordinates present in each frame. For example, movements of the right thumb across frames can help identify specific signs.

- These extracted coordinates are then saved as a Numpy array, preserving the spatial information of the key points. Shape: (45 frames, 22 coordinate information in x and y axis) Subsequently, the Numpy array is fed into an LSTM (Long Short-Term Memory) deep learning model. The LSTM model is crucial for processing sequential data and understanding the temporal dynamics of sign language gestures.

- Finally, the LSTM model predicts the word corresponding to the sign language action in the video. This predicted word is the system's output, representing the meaningful interpretation of the sign language gesture

### Output Words: [Hello, How are you, Thank you]

### Project WorkFlow

![image](https://github.com/Sooryak12/ISL_Recognition/assets/55055042/d9312bf1-d615-4fc0-a2d3-edf3b4d08709)

### Installation and Usage

1. Install Necessary Libraries: 

```bash
pip install -r requirements.txt
```

2. Create a web-app:

```python
python app.py
```

3. Run with laptop camera (live feed):

```python
python deploy_code.py
```

4. Process saved video from the command line:

```python
python run_through_cmd_line.py -i input_file_path
```

### API Reference

#### Upload Video in form:

```http
POST /upload-video/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `file`    | `file`   | Video                      |

#### Test API call:

```http
GET /test/
```

### Data

Data Source: 
1. [INCLUDE 50 Dataset](https://zenodo.org/record/4010759)
2. Video collection by recording ourselves doing the actions.

- The INCLUDE 50 dataset contains 50 words grouped under tags like greetings, pronouns, and each word contains 25 videos with augmentations.
- Since 25 videos are not enough to train a deep learning model, we recorded additional data by capturing videos of the actions ourselves.
- We added a 'None' class to signify no action in the video to prevent random outputs when no action is performed.
- Our final test set includes 20 videos of our friends performing the actions in real-time scenarios.
- Initially, we experimented with a CRNN model (V1) trained with 16 videos. Although the model showed considerable F1 score, it performed poorly in real-time and suffered from underfitting.
- Later, we limited the classes and collected more data. The LSTM model was trained with 3 words: [Hello, How are you, Thank You], each containing 100 videos.

#### Dataset Details:

##### Actions: [Hello, How are you, Thank you]

Training Data: 
| Include Dataset Videos| Own Videos  | Number of Videos after augmentation                | Total Training Data |
| :-------- | :------- | :------------------------- | :----------|
| 25 videos per action | 60 Videos Per action | 340 Videos per action | 1020 Videos

Validation Data: 
| Include Dataset Videos| Own Videos  |  Total Validation  Data |
| :-------- | :------- | :------------------------- |
| 10 videos per action | 20 Videos Per action | 90 Videos  | 

Real Time Test Data: 

| Videos per action| Total   Data |
| :-------- | :------- | 
| 8 Videos  | 24 Videos  | 

### Input Shape

We experimented with various mobile devices to detect the number of frames captured per second and decided that 45 frames would provide sufficient information for predicting a class without losing crucial details.

```
If there are more than 45 frames in the captured video:
     We evenly select frames to avoid losing information.
Else if the number of frames is less than 45:
     We add empty frames to maintain a constant input shape.
```

### Mediapipe PoseNet Detection

Mediapipe PoseNet for Sign Language Project:
Mediapipe PoseNet, a real-time pose estimation model, lies at the core of our sign language project. Leveraging PoseNet's robustness, we achieve precise tracking of body keypoints, enabling accurate interpretation of sign gestures. With seamless integration and customization options, our application empowers effective communication for the deaf and hard of hearing community.

### Architectures

```
V1: CRNN Model Architecture
   - A Time Distributed MobileNet model takes keypoints embedded in video as input.
   - These are passed through LSTMs and Dense layers to classify actions.

V2: LSTM Architecture (Final Version)
   - Numpy array containing keypoint coordinates in each frame as a separate array. Array Shape: (45, 24, 2)
   - These are fed through LSTMs to classify the actions.
```

### Results

LSTM Model performed significantly well both in validation set and exceptionally well in real time test data.

Categorical Accuracy: 
| Train | Validation   | Real-Time Test Data                |
| :-------- | :------- | :------------------------- |
| 78   % | 74.6 % | 84 %                     |

CRNN Time Distributed Model (V1) Categorical Accuracy:

| Train | Validation   | Real-Time Test Data                |
| :-------- | :------- | :------------------------- |
| 82%    | 42.4%  | 5%              |

Model Size Comparision:

| CRNN Model (V1) | LSTM Model   | 
| :-------- | :------- | 
| 323mb (saved weights and structure)| 2.3mb (only weights)| 

### Screenshots

1. Web app:

![ApplicationFrameHost_BbTrmb1MGc](https://github.com/Sooryak12/ISL_Recognition/assets/55055042/7facb461-18b7-4eb2-adca-2161a9bce712)

2. Run with Laptop camera as feed.
![ApplicationFrameHost_H5ia1qMcXq](https://github.com/Sooryak12/ISL_Recognition/assets/55055042/476e0c90-728f-44e1-9b9a-bd127695dbd1)

### Background

- Sign language is used by members of the deaf community for communication, where each hand gesture corresponds to a specific meaning.
- In India, there are over 5 million deaf individuals, but there are only 250 certified sign language interpreters, resulting in one interpreter for every 20,000 deaf people.
- To address this imbalance, we propose the "Word Level Sign Language Recognizer" for Indian Sign Language, using the INCLUDE Dataset containing 2-3 second videos with corresponding signs.
- This project can be a game-changer, enabling deaf community members to interact more easily with others.
- Our approach involves extracting key pose feature points (body positions) and using a neural network architecture to find spatial differences between frames, allowing us to build a model for classifying signs into words.

### Acknowledgements

- [INCLUDE: A Large Scale Dataset for Indian Sign Language Recognition](https://dl.acm.org/doi/10.1145/3394171.3413528)
- [Nicholas Ronette Tutorials](https://www.youtube.com/@NicholasRenotte)

---

## Project 4: SPARC Animation - Web-Based Sign Language Translator

### Overview

SPARC Animation is a web-based sign language translator application that converts text input into sign language gesture videos. Users can type text, and the application plays corresponding sign language video animations sequentially, making it an educational and accessible tool for learning sign language.

### Features

#### Core Capabilities

- **Text-to-Sign Language Conversion**
  - Converts text input into sign language gesture videos
  - Supports alphabets (A-Z), numbers (0-9), and words/phrases
  - Sequential video playback for complete sentences

- **Three Operating Modes**
  1. **Character-by-Character Mode**: Breaks input into individual characters (A-Z, 0-9) and plays corresponding alphabet or number videos sequentially
  2. **Dictionary Match Mode**: Matches entire words/phrases from the dictionary folder and plays corresponding videos
  3. **Integrated Mode**: Hybrid approach that tries dictionary match first, then falls back to character-by-character for unmatched words

- **Video Queue System**
  - Visual queue display showing upcoming characters/words
  - Real-time progress tracking with percentage and status messages
  - Highlights current video being played and marks completed ones

- **Modern User Interface**
  - Dark theme with cyan/purple gradient accents
  - Glassmorphism effects (backdrop blur, transparent surfaces)
  - Responsive design for mobile and desktop
  - Smooth animations and transitions
  - Interactive mode toggle buttons

### Technology Stack

- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- **Icons**: Font Awesome icons
- **Fonts**: Google Fonts (Inter, Orbitron)
- **Video Format**: MP4 files served from local directories
- **Architecture**: Fully client-side application (no backend required)

### Project Structure

```
Sparc_UI_Final/
├── index.html                    # Main HTML structure with UI components
├── script.js                     # Core JavaScript logic for video processing and playback
├── styles.css                    # Modern dark-themed styling with gradient effects
├── Alphabet_videos/              # A-Z letter sign language videos (A.mp4, B.mp4, etc.)
├── Numericals_videos/            # 0-9 number sign language videos (0.mp4, 1.mp4, etc.)
└── dict/                         # Dictionary folder organized by first letter
    ├── A/                        # Words starting with A
    ├── B/                        # Words starting with B
    ├── All_Numbers/              # Numeric terms (1_One.mp4, 10_Ten.mp4, etc.)
    └── ...                       # Other letter folders
```

### Installation and Usage

#### 1. Setup

No installation required! This is a fully client-side web application.

1. Download or clone the project files
2. Ensure all video files are in their respective folders:
   - `Alphabet_videos/` - Contains A.mp4 through Z.mp4
   - `Numericals_videos/` - Contains 0.mp4 through 9.mp4
   - `dict/` - Contains word/phrase videos organized by first letter

#### 2. Running the Application

Simply open `index.html` in a modern web browser:

```bash
# Option 1: Double-click index.html
# Option 2: Open via local server (recommended for development)
python -m http.server 8000
# Then navigate to http://localhost:8000
```

#### 3. Using the Application

1. **Select a Mode**: Choose from Character-by-Character, Dictionary Match, or Integrated Mode
2. **Enter Text**: Type your text in the input field
3. **Watch Videos**: The application will automatically play sign language videos for your input
4. **Track Progress**: Monitor the progress bar and queue badges to see what's playing and what's next

### Technical Implementation

#### File Path Resolution

- **Alphabet videos**: `Alphabet_videos/{Letter}.mp4` (e.g., `Alphabet_videos/H.mp4`)
- **Number videos**: `Numericals_videos/{Digit}.mp4` (e.g., `Numericals_videos/5.mp4`)
- **Dictionary videos**: `dict/{FirstLetter}/{Word}.mp4` (e.g., `dict/A/Apple.mp4`)
- **Number terms**: `dict/All_Numbers/{Term}.mp4` (e.g., `dict/All_Numbers/10_Ten.mp4`)

#### Video Processing Flow

1. User inputs text and selects mode
2. Input is parsed based on mode (character split vs word split)
3. Video paths are resolved and added to queue
4. Queue is displayed as visual badges
5. Videos play sequentially with progress tracking
6. On completion, queue clears and resets

#### Error Handling

- Validates input (non-empty, supported characters)
- Handles missing video files gracefully
- Shows user-friendly error messages
- In Integrated Mode, automatically falls back to character-by-character if dictionary video fails

### Key Features in Detail

#### Mode 1: Character-by-Character
- Breaks input into individual characters (A-Z, 0-9)
- Plays corresponding alphabet or number videos sequentially
- Example: "HELLO" plays H, E, L, L, O videos in sequence

#### Mode 2: Dictionary Match
- Matches entire words/phrases from the dictionary folder
- Searches in `dict/[FirstLetter]/[Word].mp4` structure
- Handles case variations (capitalized, uppercase, lowercase)
- Example: "Apple Fish" plays Apple.mp4 and Fish.mp4 if found

#### Mode 3: Integrated Mode
- Hybrid approach: tries dictionary match first, falls back to character-by-character
- For sentences like "I want Apple":
  - If "Apple" exists in dictionary, plays that video
  - If "I" or "want" don't exist, breaks them down character-by-character
- Gracefully handles missing dictionary entries

### UI/UX Features

- **Grid Background Pattern**: Visual depth with animated grid
- **Glassmorphism Effects**: Backdrop blur and transparent surfaces
- **Smooth Animations**: Transitions for all interactive elements
- **Real-time Feedback**: Current/completed badges for video queue
- **Progress Indicators**: Percentage and status text updates
- **Responsive Design**: Works on mobile and desktop devices

### Use Cases

- **Educational Tool**: Learn sign language by visualizing gestures for text
- **Accessibility**: Help deaf and hard-of-hearing individuals communicate
- **Language Learning**: Practice sign language vocabulary and phrases
- **Communication Aid**: Convert text to sign language for presentations or demonstrations

### Browser Compatibility

- Modern browsers with HTML5 video support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Future Enhancements

- Support for additional sign languages
- Custom video upload functionality
- User-defined dictionary entries
- Export functionality for video sequences
- Integration with speech-to-text for voice input

### License

[Specify your license here]

### Contributing

[Add contribution guidelines if applicable]

### Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- All contributors to the sign language video library

---

**SPARC Animation: Making sign language accessible through web technology**

