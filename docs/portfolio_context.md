# Harshit Singh — Portfolio Master Reference Context

This document serves as the single, high-fidelity reference file containing all verified details, links, metrics, and technical specifics of Harshit Singh's professional engineering journey. It merges his resume, GitHub profile details, project readmes, experience, achievements, and technical stack without redundancies.

---

## 👤 Executive Profile & Identity

*   **Name:** Harshit Singh
*   **Location:** Chennai, India
*   **Role:** Electronics and Computer Engineering Undergraduate | Robotics & Software Systems Builder
*   **Core Focus:** Engineering intelligent, hardware-backed AI systems bridging physical and digital worlds (Applied Computer Vision, Machine Learning, Robotics Middleware, Real-time Edge Intelligence, and IoT).
*   **Contact Info:**
    *   **Phone:** +91-8826483132
    *   **Email:** [harshit.workmain@gmail.com](mailto:harshit.workmain@gmail.com)
    *   **LinkedIn:** [linkedin.com/in/harshit-singh-3b8467300](https://www.linkedin.com/in/harshit-singh-3b8467300/)
    *   **GitHub:** [github.com/harshitworkmain](https://github.com/harshitworkmain)
    *   **X (Twitter):** [x.com/HarshitSin22346](https://x.com/HarshitSin22346)

---

## 🛠️ Technical Arsenal

| Category | Technologies & Tools |
| :--- | :--- |
| **Programming Languages** | C, C++, Python, Java, TypeScript, JavaScript, HTML, CSS |
| **AI & ML Frameworks** | PyTorch, TensorFlow, TensorFlow/Keras, OpenCV, Ultralytics YOLOv8, MediaPipe, CVZone, TensorFlow.js |
| **Robotics & Simulation** | ROS 2 (Jazzy), rclpy, Gazebo Simulator, SLAM Toolbox, Nav2, Robot_Localization (EKF) |
| **Embedded & Edge Hardware** | ESP32, ESP8266, Raspberry Pi 4B, Arduino Uno/Mega, MicroPython, Embedded C, Sensor Interfacing (LiDAR, IMU/MPU6050, Encoders, Ultrasonic, MAX30102, GSR, NEO-6M GPS) |
| **Systems & Platforms** | Linux, macOS, Real-time Data Pipelines, systemd, local REST servers, Web Push/VAPID, WebRTC, Socket.IO |
| **Full-Stack & Databases** | React 19, Node.js 22, Express 5, Flask, SQLite (`better-sqlite3`), Phaser 3, Vite 7, Tailwind CSS 4, Recharts, GSettings |
| **Development & Design Tools** | Visual Studio Code, Git, GitHub, Docker, MATLAB, LTspice, KiCad |

---

## 💼 Professional Experience

### 1. AI & Robotics Intern — Autonomous Mobile Robotics
**STEMTEC AI & Robotics Technology Pvt. Ltd.** | Chennai, India  
*Timeline: Jul 2025 – Aug 2025* | **Credentials:** [[Internship Certificate](https://drive.google.com/file/d/1tlTXqB9SfdCe-Xos92JxB9dEDdrS36nc/view?usp=sharing)]

*   **LiDAR-Based Obstacle Avoidance:** Developed a ROS 2 Jazzy reactive navigation node processing `/scan` LiDAR data at **10 Hz**. Enabled real-time obstacle avoidance within a 0.75 m safety radius, reducing collision events by **~80%** during physical indoor testing.
*   **Low-Latency Motor Control:** Implemented timer-driven velocity control nodes publishing to `/cmd_vel` with **sub-50 ms command latency**, achieving stable motion at 0.4 m/s.
*   **Odometry Validation:** Executed consistent bidirectional odometry validation across simulation (Gazebo) and hardware deployments.

### 2. Deputy Operations Lead
**Team Namo Nirvana (Official Robotics Special Team, VIT Chennai)**  
*Timeline: Jan 2025 – Present* | **Credentials:** [[Letter of Appreciation (LOA)](https://drive.google.com/file/d/13dByHnoyORd2wqy27hb_piQI_UBVmwLd/view?usp=sharing)]

*   **Team Scale & Coordination:** Led a cross-functional organization of **100+ members** bridging mechanical, software, and embedded systems engineering.
*   **Operational Scale:** Managed logistically complex participation in **5–6 major competitions per semester**, boosting execution efficiency by **35%**.
*   **Sponsorship & Delivery:** Secured **2 corporate sponsors** and successfully managed end-to-end merchandise design and logistics.

---

## 🚀 Engineering Feats & Projects

### 🧠 1. NeuroBridge AI — Full Autism Care Ecosystem
*AI-Powered Screening, Interactive Therapy, & Clinical Intelligence* | **Status:** Production-Ready  
*   **Live App:** [neurobridge-app.onrender.com](https://neurobridge-app.onrender.com)
*   **API Server:** [neurobridge-api.onrender.com](https://neurobridge-api.onrender.com)
*   **Repository:** [github.com/harshitworkmain/Neurobridge (branch: neurobridge-v2)](https://github.com/harshitworkmain/Neurobridge)

*   **AI Screening & Risk Assessment:** Uses MediaPipe Face Mesh (**468 landmarks**) to analyze facial expressions in real-time. Employs iris/nose-based gaze tracking algorithms for attention scoring to assess focus and eye contact. Integrates clinical questionnaire metrics for probabilistic severity triage.
*   **Interactive Therapy Hub:** Developed 4 custom **Phaser 3** games tailored for neurodevelopmental training: *Memory Match* (visual memory), *Day Builder* (routine sequencing), *Emotion Mirror* (expression mimicking via camera), and *Gaze Garden* (sustained focus tracking). Supports note-taking and video replay of sessions.
*   **Clinician Analytics Dashboard:** Built dynamic clinical worklists using **React 19, Tailwind 4, and Recharts**. Incorporates regression alerting systems that notify clinicians if a patient shows signs of cognitive regression.
*   **Moderated Community Forum:** Safe caregiver forum with real-time **TensorFlow.js Toxicity Model** integration for automated profanity and hate speech filtering.
*   **Teleconsultation:** Features WebRTC video calls mediated via Socket.IO signaling and TURN server relay, backed by weekly scheduling grids.
*   **Sensory & Accessibility Design:** Features a **Sensory-Safe / Calm Mode** that mutes gradients, decreases animation frequencies, and simplifies typography based on user age profiles.

### 🦻 2. SPARC — Sign Language Processing & Recognition System
*Modular real-time sign language translator & emotional accessibility platform* | **Status:** Deployed  
*   **Code & Docs:** [github.com/harshitworkmain/SPARC](https://github.com/harshitworkmain/SPARC)
*   **Credentials & Demos:** [[YouTube Demo Video](https://youtu.be/W2UOCENfXzg)] | [[Google Drive Demo Video](https://drive.google.com/file/d/118CLG9JfvNNn8UijlYk3M2-awfjBkGyW/view?usp=sharing)] | [[Web-App Client](https://sparc-web-app.vercel.app/)]

*   **Real-Time Sign Engine:** Built a real-time gesture pipeline trained on a custom dataset of **12,000+ hand samples**, supporting both **Indian Sign Language (ISL)** and **American Sign Language (ASL)**.
*   **Performance Metrics:** Achieved **92.4% gesture recognition accuracy** at **15–20 FPS** with end-to-end classification-to-voice latency under **180 ms**.
*   **Fault-Tolerant Architecture:** Implemented modular fallback mechanisms allowing graceful degradation—automatically bypassing OLED drivers (Waveshare 1.51" SPI) and TTS engines if sensors fail, recovering core systems in under **250 ms**.
*   **Multimodal Fusion:** Merges hand landmark tracking (MediaPipe, CVZone) with facial emotion recognition (Angry, Happy, Neutral, Sad) and outputs recognized sentences via text, voice synthesis, and local display.

### 🛡️ 3. TRIDENT — Integrated Disaster Response & Rescue Ecosystem
*Edge-Based Life Detection, Telemetry Orchestrator, & ROV Action Suite* | **Status:** Validated  
*   **Repository:** [github.com/harshitworkmain/trident](https://github.com/harshitworkmain/trident)
*   **Credentials & Demos:** [[Wearable Demo Video](https://drive.google.com/file/d/1tUl8rAFmcdpX7BgRRWtE-QdVltjiZb7W/view?usp=sharing)] | [[Physical Wearable Footage](https://github.com/harshitworkmain/trident/raw/main/assets/videos/wearable-demo.mp4)]

*   **Smart Wearable (Edge):** Created an ESP32-based multi-sensor wearable integrating MPU6050 (fall detection), MAX30102 (heart rate and SpO₂), GSR (stress assessment), and GPS NEO-6M. Processes data locally, filtering signals via weighted moving averages and exponential smoothing.
*   **Central Command Dashboard (Decision):** Designed a Flask orchestrator processing real-time telemetry with a verified **uptime of >95%**. Implemented a custom probabilistic scoring system to triage victims into Priority 1–5 categories, reducing manual triage times by **40%** and boosting rescue allocation accuracy by **30%**.
*   **Autonomous ROV (Action):** Constructed an underwater rescue vehicle powered by Arduino Uno controlling 4 high-torque thrusters. Conducted exhaustive CFD (Computational Fluid Dynamics) modeling to ensure hydrodynamic stability in rough currents.

### 👁️ 4. DrishtiGuide — Smart Assistive Navigation System
*Distributed IoT Ecosystem & Object Detection Gateway for the Visually Impaired* | **Status:** Active  
*   **Repository:** [github.com/harshitworkmain/drishtiguide](https://github.com/harshitworkmain/drishtiguide)

*   **Multi-Node Wireless Architecture:** Built a low-latency smart-cane network using **ESP-NOW** protocol. An ESP8266 Smart-Cane Node scans obstacles via HC-SR04 sensors (up to 4m) and wirelessly alerts an ESP8266 Wearable Wristband/Jacket Hub, which triggers a localized 5-level spatial haptic feedback grid.
*   **Edge Orchestration:** An ESP32 Main Controller handles heavy fall-detection (IMU) and triggers continuous GPS geofencing, serving local web portals (at `http://192.168.4.1/gps`) with **sub-100 ms system response times**.
*   **Computer Vision Gateway:** Integrates a Raspberry Pi 4 Vision Hub carrying a USB webcam to run live **Ultralytics YOLOv8** and OpenCV object detection, enabling real-time voice scene synthesis. Reduced missed-obstacle events by **~60%** in field trials.

### 🌪️ 5. Weather Risk AI System
*Deep Learning Weather Forecaster & Urban Risk Flow Graph Analyzer* | **Status:** Active  
*   **Repository:** [github.com/harshitworkmain/weather-risk-ai-lstm](https://github.com/harshitworkmain/weather-risk-ai-lstm)

*   **LSTM Forecasting:** Deployed an autoregressive Multivariate Long Short-Term Memory (LSTM) network in Keras/TensorFlow, predicting hyper-local coastal weather anomalies (Pressure, Temp, Wind, Rain) using real-time API integrations.
*   **Graph Risk Diffusion:** Modeled city environments as complex **Directed Graphs (DiGraphs)**. Evaluates cascading risk propagation (e.g. storm tracks and urban flood spread) using NetworkX **Dijkstra's Path Planning** and **Max Flow capacity bottlenecks** across interconnected urban basins.
*   **CLI Orchestrator:** Engineered a modular Python CLI using `typer` to drive the pipeline: `Ingest -> Preprocess -> Train -> Predict -> Analyze`.

### 🖥️ 6. Dual-Module Stocks Suite for GNOME
*Systemd Polling Daemon & Custom GNOME Shell Extension* | **Status:** Complete  
*   **Architecture:** Multi-tier system engineered specifically for Ubuntu 22.04 (GNOME 42).
*   **Engineered Pipeline:** A background Python polling daemon queries Finnhub and Angel One SmartAPI securely via WebSockets and pyOTP. The daemon performs atomic writes of live prices directly to `/dev/shm/gnome-stocks.json` every 60s.
*   **Visual Interface:** Built a native GNOME shell extension (`FileMonitor`) displaying scrolling stock tickers directly in the system panel, utilizing custom rotation, percentage indicator arrows, GSettings configurations, and X11/Wayland support.

### 🤖 7. Terrain Scout — Multi-Operational Defence Rover
*All-Terrain Rocker-Bogie Threat Perception Rover* | **Status:** Validated  
*   **Highlights:** Ranked 3rd at Kurukshetra 2025 (Technovation).
*   **Design & Compute:** Features a custom 6-wheel rocker-bogie mechanical chassis designed to traverse rugged, uneven terrain, decreasing mechanical motion instability by **~45%**.
*   **Compute Architecture:** Built a Raspberry Pi - Arduino master-slave communication interface operating at **20+ Hz**.
*   **Perception Pipeline:** Fuses ultrasonic rangers, metal detection arrays, and real-time computer vision threat classification on-device, registering **sub-150 ms perception latency** with a **~65% increase** in field-threat detection accuracy.

### 🦾 8. Stembot
*Educational ROS 2 / Gazebo Robot Platform* | **Status:** Complete  
*   **Repository:** [github.com/treedel/stembot](https://github.com/treedel/stembot)
*   **Key Focus:** Educational robot utilizing standard ROS 2 Python nodes for state manipulation (`two_point_looper`), reactive obstacle avoidance using 2D LiDAR datasets (`obstacle_avoider`), EKF odometry (`robot_localization`), and mapping environments using the SLAM Toolbox.

### 🌌 9. AURORA — Autonomous Rover Stack
*High-End Autonomous Navigation Simulation Stack (ROS 2)* | **Status:** Concept/Context
*   **Compute Stack:** Architected for NVIDIA Jetson deployment.
*   **Navigation Stack:** ROS 2 middleware processing LiDAR, IMU, wheel odometry, and stereo vision inputs.
*   **Trajectory Planning:** Employs SLAM Toolbox for localization, and a TEB (Timed Elastic Band) + MPC (Model Predictive Control) planner ensemble to resolve non-holonomic navigation paths.
*   **State Control:** Governed via Behavior Trees for execution, recovery routines, and battery-aware task planning.

---

## 🎓 Education

*   **Degree:** B.Tech in Electronics and Computer Engineering
*   **Institution:** Vellore Institute of Technology, Chennai (India)
*   **Timeline:** 2023 – 2027
*   **CGPA:** 8.07
*   **Schooling:** New Era School, Ghaziabad (CBSE)
    *   Class XII: 87.2% | Class X: 89.9% (Timeline: 2020 – 2023)

---

## 🏆 Competitions & Achievements

1.  **SIH’25 National Finalist (Smart India Hackathon 2025 — Hardware Edition):**
    *   Advanced to Top 50 out of 864 teams in internal qualifiers.
    *   Ranked **Top 5 out of 500+ teams** nationally for the primary problem statement to compete in the National Grand Finale.
    *   **Credential:** [[SIH'25 Certificate](https://drive.google.com/file/d/1Vy3qPMbipSNLYGE3GdyYMsqRPwHSYtPD/view?usp=sharing)]
2.  **3rd Place, Technovation 2025 (Kurukshetra ’25, CEG Guindy, Anna University):**
    *   Ranked 2nd Runner Up out of 50+ elite hardware teams presenting the Terrain Scout Rover project.
    *   Awarded a cash prize of **₹15,000**.
    *   **Credential:** [[Technovation Certificate](https://drive.google.com/file/d/1AkRdc0y1Qdw9cImu5395G5RwdB8vPJuo/view?usp=sharing)]
3.  **1st Place, Innovate X Impact (V-NEST Business Incubator):**
    *   Won 1st Place out of 35 competing startup pitches.
    *   Awarded a cash prize of **₹5,000**.
4.  **NCC Achievements (1 Tamil Nadu Battalion NCC):**
    *   Promoted from Cadet to Lance Corporal (Republic Day 2025).
    *   Promoted from Lance Corporal to Corporal (Independence Day 2025).
    *   **NCC CATC-25 Camp:** Secured Triple Honors: *Best Marching Contingent*, *Best Cultural Performance*, and *Overall Best Company*.
5.  **Indian Coast Guard Fitness Festival 2025:**
    *   Awarded Certificate of Appreciation for coordinating logistics, registration, and event scheduling for **1,000+ elite competitors** (Armed forces personnel, corporate leaders, and university units).

---

## 🏀 Extracurriculars & Leadership

*   **Team Namo Nirvana Operations Lead:** Coordinated schedules, budgets, technical team alignments, and sponsored materials for a 100+ member engineering crew.
*   **Sports:** University and national-level basketball player (Secured 3rd Place Men's Category, Founder's Birthday Trophy 2024 at SRM IST).
*   **Social Outreach:** Core volunteer at *VITeach*, leading tutoring and community outreach camps for underprivileged children.
*   **Academic Clubs:** Active participant in the *VIT Chennai Quiz Club*.
*   **Languages:** English (Fluent) | Hindi (Native)

---

## 🎨 Portfolio Design System & Branding Guidelines

### Visual Theme Preferences
*   **Aesthetic Tone:** Immersive, high-performance, dark-mode futuristic. Combines premium deep slate backgrounds with vibrant accent glows (e.g. electric cyan, emerald green, and neon purple) reflecting AI, robotics, and hardware systems.
*   **Layout Structure:**
    *   **Full-Screen 3D R3F Canvas Backdrop:** Interactive, responsive background featuring floating abstract geometries, rotating coordinate grids, or starfield particles reacting subtly to scroll depth and mouse coordinates.
    *   **HTML Glassmorphic Overlays (Tailwind + Framer Motion):** Smooth scroll-linked entering states, clean typography (e.g. Google Fonts Outfit or Space Grotesk), and crisp micro-animations for hover states.

### Copywriting Rules
*   **Quantifiable Impact First:** Never write generic descriptions. Focus strictly on numbers, response latencies, data throughputs, and physical percentage changes (e.g. *"...reduced collision events by 80% with sub-50 ms latencies"*).
*   **Framing Strategy:** Highlight advanced software pipelines, AI edge compute, and database latency metrics prominently for software developer roles, keeping the physical hardware (microcontrollers, chassis design) as highly structured context.
