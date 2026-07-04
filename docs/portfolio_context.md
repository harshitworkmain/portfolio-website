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
4.  **BIS Project Showcase Presenter (Bureau of Indian Standards):**
    *   Selected to exhibit the Terrain Scout Rover at the BIS Project Showcase held at VIT Chennai, demonstrating its intelligent navigation and scouting capabilities.
5.  **VITISH’25 Internal Finalist (SIH 2025 Internal Hackathon):**
    *   Placed in the **Top 100 out of 864 competing teams** (advancing to the 212-team 24-hour hackathon round) with the TRIDENT## 🏀 Extracurriculars & Leadership

*   **Team Namo Nirvana Operations Lead / Deputy Operations Lead:** Part-time | Jan 2025 - May 2026 (1 yr 5 mos). Coordinated schedules, budgets, technical team alignments, and merchandise for a 100+ member robotics engineering crew.
    *   **Roles & Appointments:**
        *   **Operations Deputy Lead (Apr 2025 - May 2026):** Appointed effective **July 14, 2025**. Managed embedded systems operations, project showcases, and team strategy.
            *   *Appointment Post:* [LinkedIn Announcement](https://www.linkedin.com/posts/harshit-singh-3b8467300_namonirvana-vitchennai-robotics-activity-7351886716011520000-BYRd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg)
            *   *Letter of Appointment:* [[LOA Certificate](https://drive.google.com/file/d/13dByHnoyORd2wqy27hb_piQI_UBVmwLd/view?usp=sharing)]
        *   **Operations Team Member (Jan 2025 - Apr 2025):** Led initial logistics, sponsorships, and project management pipelines.
    *   **Namo Nirvana Operational Milestones:**
        *   **Official Special Team Recognition:** Led the coordination to achieve official recognition for Team Namo Nirvana as the official Robotics Special Team of VIT Chennai.
            *   *Related Assets:* `public/images/leadership/namo-nirvana/officially-recognized-as-special-team.jpeg`, `nn-logo*.jpeg`
        *   **Recruitment & Orientation:** Structured and conducted multi-stage recruitment interviews for departments spanning Programming, Electronics, Mechatronics, Research & Science, Media & Outreach, and Operations. Formally addressed and oriented the new engineering recruits to align them with operational goals.
            *   *Related Assets:* `public/images/leadership/namo-nirvana/special-team-recruit-nterview*.jpeg`, `new-recruits-addressing*.jpeg`
            *   *Related LinkedIn Post:* [Official Recruitment Post](https://www.linkedin.com/posts/namo-nirvana_namonirvana-vitchennai-robotics-activity-7351808302894272513-nrfe?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg)
        *   **College Special Team Showcase:** Coordinated showcase exhibitions of robotics projects for the university leadership, including a project review by the Pro-VC.
            *   *Related Assets:* `public/images/leadership/namo-nirvana/college-special-team-showcase-grp-photo.jpeg`, `college-special-team-showcase-proVC-review.jpeg`
            *   *Related LinkedIn Post:* [Harshit's Showcase Repost](https://www.linkedin.com/posts/harshit-singh-3b8467300_namonirvana-futurecreators-roboticsrevolution-activity-7322695131084595200-N7Kp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg)
        *   **Merchandise & Branding Logistics:** Handled logistics and design coordination for official team merchandise, including team caps.
            *   *Related Assets:* `public/images/leadership/namo-nirvana/nn-cap-merch.jpeg`
        *   **Tenure Conclusion & Dean Reviews:** Stood for final review with the School Dean and Associate Dean at the close of operational tenure.
            *   *Related Assets:* `public/images/leadership/namo-nirvana/team-photo-with-school-dean-assocDean-as-tenure-ends*.jpeg`
        *   **Power Transfer to Juniors:** Led the formal transition and hand-off ceremony transferring operations and leadership to the junior core team.
            *   *Related Assets:* `public/images/leadership/namo-nirvana/power-transfer-to-juniors*.jpeg`

*   **NCC Cadet Leadership (1 Tamil Nadu Battalion NCC):**
    *   **Service Timeline:** Part-time | Aug 2024 - Jan 2026 (1 yr 6 mos).
    *   **NCC Digital Assets:**
        *   Instagram Channel: [instagram.com/vit_chennai_ncc](https://www.instagram.com/vit_chennai_ncc/)
    *   **Cadet Promotions & Timeline:**
        *   **Corporal (Aug 2025 - Jan 2026):** Promoted from Lance Corporal during the Investiture Ceremony held on the occasion of the **79th Independence Day (August 15, 2025)**.
        *   **Lance Corporal (Jan 2025 - Oct 2025):** Promoted from Cadet during the Investiture Ceremony held on the occasion of the **76th Republic Day (January 26, 2025)**.
        *   **Cadet (Aug 2024 - Feb 2025):** Initial enlistment and military drills.
        *   *Camp Honors (CATC-25):* Secured Triple Accolades: *Best Marching Contingent*, *Best Cultural Performance*, and *Overall Best Company*. [[CATC'25 Certificate](https://drive.google.com/file/d/1Uu_nhReVK7h4xlHu3vYChe7acoKf6WPa/view?usp=sharing)]
    *   **Key Guard of Honor, Piloting, & Event Coordination Achievements:**
        *   **Valedictory Address Salami Shastra (July 2025) — Chief Minister of Goa Visit:** Selected for the elite Salami Shastra (Guard of Honor) presenting official salute and parade honors to Chief Minister Dr. Pramod Sawant during the "Road Map to VIKSIT BHARAT" national conference at VIT Chennai.
            *   *Related Assets:* `public/images/leadership/ncc/salami-shastra-to-goa-cm*.jpeg`
        *   **Parakram Divas Piloting & Tribute (Jan 23, 2025):** Handled piloting logistics and stood guard of honor in saluting the parents of Ashok Chakra recipient Major Mukund Varadarajan (Shri R. Varadarajan and Smt. Geetha Varadarajan) during the Netaji Subhas Chandra Bose commemoration alongside military dignitaries (Lt. Col. Dr. Rajan Gupta and Former Chief of Staff Shri M. Indrabalan).
            *   *Related Assets:* `public/images/leadership/ncc/piloting-maj-varadrajans-parents-army-officers*.jpeg`
        *   **OTA Chennai Passing Out Parade Visits & Training:** Coordinated and participated in military infrastructure camps and training visits at the Officers Training Academy (OTA) Chennai. Interacted with senior OTA instructors, officer cadets (including notable VIT alumni), and army officers on the drill square to study parade protocols and command drills.
            *   *Related Assets:* `public/images/leadership/ncc/ota-adjutants-parade-visit*.jpeg`
        *   **Coast Guard Fitness Festival (CGFF) 2025 Coordination (Feb 15, 2025):** Organized by the Indian Coast Guard (Region East) for the 49th Raising Day. Under VIT NCC, spearheaded student coordination, registration management, and piloted chief guests Dr. J. Radhakrishnan (IAS, Additional Chief Secretary, TN) and Inspector General Datwinder Singh Saini (TM, Commander of ICG Region East). [[CGFF'25 Certificate](https://drive.google.com/file/d/1zLqcapaGHt8TDJJSpMiYdnpmeqqUG60l/view?usp=sharing)]
            *   *Activities:* Co-coordinated the Coast Guard Mariners Challenge (obstacle endurance test), bootcamp workouts, Zumba zone, and live entertainment brackets (DJ, bands) for 700+ competitors with a ₹2 Lakhs prize pool.
            *   *Related Assets:* `public/images/leadership/coast-guard/coast-guard-fitness-festival-2025-*.jpeg`

*   **Sports:** University and national-level basketball player (Sports Club VITC | Part-time | Aug 2023 - Jun 2025, 1 yr 11 mos).
    *   **Founder's Birthday Trophy 2024:** Secured 3rd Place Men's Category at SRM IST, organized by Directorate of Sports. [[SRM IST Certificate](https://drive.google.com/file/d/1Atnfj2h5QbCv8gZkVAOXkYOoSgdbJVkn/view?usp=sharing)]
*   **Athletics:** Marathon runner. [[Marathon Certificate](https://drive.google.com/file/d/1r3xe2khNXcbYy3_yC9T7Dnl15S3bTtin/view?usp=sharing)]
*   **Social Outreach (VITeach VITC):** Core volunteer & FFCS Member | Part-time | Jan 2024 - Mar 2025 (1 yr 3 mos). Leading tutoring, environmental campaigns, and community outreach drives.
    *   **VITeach Digital Assets:**
        *   Official Website: [viteach.in](https://viteach.in/)
        *   Secondary Platform: [viteach-website-ten.vercel.app/content](https://viteach-website-ten.vercel.app/content)
        *   LinkedIn Portal: [linkedin.com/company/viteachvitcc](https://www.linkedin.com/company/viteachvitcc/)
        *   Instagram Feed: [instagram.com/viteachvitc](https://www.instagram.com/viteachvitc/)
    *   **Outreach & Logistics Milestones:**
        *   **Ansaldo Academy Quality Education Drive (SDG 4) — Oct 22 & 24, 2024:** Coordinated educational camps at Ansaldo Academy (Thazhambur, Chennai) supporting Sustainable Development Goal 4.
            *   *Day 1 (Curiosity & Awareness):* Ran interactive sessions promoting real-world application over rote learning. Addressed sensitive topics including hygiene, puberty, and breaking mental/personal struggles stigmas.
            *   *Day 2 (Nutrition & Movement):* Guided physical wellness workshops, introductory yoga sessions, and an exhibition of legumes, millets, and vegetables showcasing raw health benefits.
            *   *Day 4 (Academic Stream Mentorship):* Mentored 9th-grade cohorts on high-school stream selections (Science, Commerce, Arts). Led creative logic brain games and origami workshops.
            *   *Related LinkedIn Posts:* [VITeach SDG 4 Post](https://www.linkedin.com/posts/viteach-vitc_qualityeducation-viteach-ansaldoacademy-ugcPost-7271260000675667973-AHow?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg), [Lavanya Darshni SDG 4 Post](https://www.linkedin.com/posts/darshnilavanya_sdg-education-youth-ugcPost-7255810360899743746-sQyi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg)
        *   **Vibrance 2025 Stationery Donation Drive — April 15, 2025:** Led a 3-day flagship donation logistics track, collecting and delivering academic stationery supplies to students of Sirudhavoor Government High School alongside Faculty Coordinator Dr. Sathiya Narayanan Sekar.
            *   *Related LinkedIn Posts:* [Harshit Singh Donation Post](https://www.linkedin.com/posts/harshit-singh-3b8467300_viteach-donationdrive-schoolvisit-activity-7318722780353482753-emC-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg), [Lavanya Darshni Donation Post](https://www.linkedin.com/posts/darshnilavanya_communityservice-stationerydrive-sdg-ugcPost-7319651650325946368-6uDt?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg)
        *   **Kovalam Beach Environmental Cleaning Camp — Aug 9, 2025:** Coordinated volunteering logistics and safety protocols for a beach cleaning camp at Kovalam Beach.
        *   **Pictionary Pre-Vibrance Event — Feb 17, 2024:** Coordinated an offline games event at the Amphitheatre as a Student Coordinator managing 22 volunteers across Registration (4), Design (5), Marketing (3), and Groundwork (10).
            *   *Structure:* Organized games (Skribbl, Akinator, Whisper Challenge) based on movies/anime for teams of 2–8. Designed a custom paper-slip tracking system to log and calculate scores for prizes.
*   **Academic Clubs:** Active participant in the *VIT Chennai Quiz Club*.

*   **Languages:** English (Fluent) | Hindi (Native)

---



## 🎨 Portfolio Design System & Branding Guidelines

### Visual Theme Preferences
*   **Aesthetic Tone:** "Inverted Universe" — gallery-white canvas (`#ffffff`) backdrop populated by deep-black/charcoal-zinc elements, and subtle brand-colored highlights.
*   **Layout Structure & Routing:**
    *   **3D Interactive Backdrop:** WebGL interstellar-style black hole and suspended graphite-like dust particles built using React Three Fiber (R3F) and Three.js, responding dynamically to scroll depth and mouse cursor position.
    *   **HTML Glassmorphic Panels:** Clean translucent glass boards (`bg-white/45`) with `backdrop-blur-md` filters and thin borders (`border-zinc-100`), styled with smooth entry and hover animations.
    *   **Typography:** Displays headlines in uppercase **Space Grotesk** for a geometric, technical feel, balanced by **Plus Jakarta Sans** for body copy and **Geist Mono** for telemetry elements.
    *   **Landing Page Sections:**
        *   **Software Systems & Telemetry Console:** Simulated UNIX terminal diagnostic log widget updating dynamically based on intersection observation.
        *   **Tech Stack Matrix:** 5-category SVG-driven container showing official developer tool and language logos with hover magnification.
        *   **Core Engineering Pillars:** Three distinct card areas emphasizing Embedded Intelligence, Applied ML & Analytics, and Full-Stack Systems.
        *   **Unified Contact Block:** Integrated directly at the bottom of the homepage (`#contact`) with Navbar hash routing, smooth-scroll behavior, and client-side redirects from auxiliary routes.
    *   **Achievements Timeline Subpage (`/achievements`):**
        *   **Vertical Wavy Telemetry Timeline:** Replaces the standard straight line with a dynamic, winding sine-wave SVG path (`WAVE_AMPLITUDE = 40`) that stretches across the measured container height (tracked via `ResizeObserver` and drawn dynamically via `useMemo` path calculations). It fills dynamically based on scroll position using Framer Motion's `useScroll` (configured with `offset: ["start end", "end 85%"]` to guarantee 100% path length fill when scrolled to the end) and `useSpring` for smooth interpolation.
        *   **Hybrid Alternating Layout:** On desktop viewports (`md` and up), utilizes a 3-column layout structure (`grid grid-cols-[1fr_240px_1fr] items-center`) that staggers cards on the left (even indices) and right (odd indices). On mobile devices, uses staggered margin offsets (`w-[85%] mr-auto pr-1` vs `w-[85%] ml-auto pl-1`) to keep cards legible and preserve visibility of the central timeline path.
        *   **Pulsing Node Alignment:** Telemetry node dot coordinates are mathematically locked to the wave peaks: `leftOffset = isLeft ? 50 + amplitude : 50 - amplitude` (as a percentage of the center column width), ensuring perfect alignment on all screen sizes.
        *   **Telemetry Badges & Date Headers:** Achievement cards render telemetry details with a custom flexbox header containing both the system metadata and the event's date: `[ HASH: ... | SCOPE: ... | STATUS: ... ]` and `[ DATE: ... ]`.
        *   **Chronological Ordering & Team Media Gallery:** Events are sorted in descending chronological order (SIH-2025 Dec 2025 → VITISH'25 Sept 2025 → Innovate X Impact Mar 2025 → BIS Mar 2025 → Technovation Feb 2025). The `MediaGallery` instances prioritize group/team photographs at index 0 (active image) with secondary project or hardware screenshots stored at index 1.
        *   **Overlay Lightbox:** Triggers on featured image or `+X` click, creating a high-contrast dark overlay modal locking main scroll. Fully supports left/right keyboard navigation, closing on `Escape` key, click close triggers, and a bottom horizontal tray of all event/project photos.
        *   **LinkedIn Integration**: Features custom "View Post on LinkedIn" buttons styled with the official LinkedIn vector logo, dynamic hover state transitions, and responsive inline container setups.
    *   **Projects Subpage (`/projects`):**
        *   **Conceptual Ordering**: Arranged to showcase heavy AI/ML and Robotics work first (SPARC ➔ TRIDENT ➔ DrishtiGuide ➔ Weather Risk AI ➔ Terrain Scout ➔ Stembot ➔ GNOME Stocks ➔ NeuroBridge AI) to emphasize system engineering capabilities.
        *   **Autoplay Video Hover Previews**: Project cards with demo media feature quiet, looping autoplay videos (`videoPreview`) which transition smoothly on mouse hover, overlaying a red "LIVE" recording telemetry badge.
        *   **Graceful Media Fallbacks**: Projects with pending cover media show an elegant telemetry-themed `[ COVER PENDING ]` fallback via image `onError` handlers.
        *   **Detail Specs Modal Console**:
            *   **Tab 1 (Architecture Flowcharts)**: Inline, responsive SVG flow diagrams mapped directly in React coordinates. Visual design features slate grey grid panels, thin dotted flow channels, active arrowheads, and highlighted primary processor blocks.
            *   **Tab 2 (Media Console)**: Interactive image carousel and video preview player.
            *   **Tab 3 (Technical Arsenal)**: Full lists of resume-synced technology tags paired with quick links for Source Code, Live App, and Demo links.
*   **Mobile Responsive Optimizations:**
    *   **Responsive Three.js/2D Canvas:** Dynamically detects mobile screens (`w < 768`) to scale the black hole to `0.65×` and translate it down (`y = -2.0` in 3D group, `+100px cy` in 2D fallback canvas). This prevents the central black hole from covering the main landing texts.
    *   **Status Console Safeguards:** Scales down console output text to `text-[9px] sm:text-[10px] md:text-[11px]` and replaces `whitespace-pre` with `whitespace-pre-wrap break-words` to eliminate horizontal viewport bleeding.
    *   **Glass Panel Opacity Boost:** Raises `.glass-panel` background opacity from `0.45` to `0.85` on mobile query screens under 768px wide. This guarantees text contrast and legibility over the active background animation.

### Copywriting Rules
*   **Quantifiable Impact First:** Never write generic descriptions. Focus strictly on numbers, response latencies, data throughputs, and physical percentage changes (e.g. *"...reduced collision events by 80% with sub-50 ms latencies"*).
*   **Framing Strategy:** Highlight advanced software pipelines, AI edge compute, and database latency metrics prominently for software developer roles, keeping the physical hardware (microcontrollers, chassis design) as highly structured context.
