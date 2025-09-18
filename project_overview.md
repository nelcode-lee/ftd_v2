Cursor Prompt – Digital Training Workbook (Forward Tipping Dumper)

Role: You are an expert full stack engineer and UX/UI specialist.
Task: Convert the attached learner workbook (“Forward Tipping Dumper – Skills Bootcamp”) into a React Native mobile application that integrates with the existing training platform at https://operator-skills-hub-v4.vercel.app/
.

Requirements
1. Content Conversion

Parse the provided workbook document and structure content into:

Modules/Chapters (e.g., Health & Safety, Pre-Operational Checks, Environmental Considerations, etc.)

Knowledge Stops (turn into interactive quizzes: multiple choice, short answers, image-based questions).

OperateSAFE reminders (stylised safety callouts with icons/colour emphasis).

Glossary of terms (searchable, collapsible dictionary).

Support images, diagrams, and QR code links from the workbook (render as tappable interactive cards or embedded media).

Include note-taking areas for learners (stored locally + synced to backend when online).

2. Interactive Learning

Each Knowledge Stop should become an online test:

Multiple-choice, checkbox, fill-in, or scenario questions.

Randomised question order on retake.

Auto-feedback + explanation (from workbook text).

Add progressive learning tracking:

Save time spent per module.

Mark completion status.

Show progress bars per section.

End-of-module mock tests with scoring and certification readiness indicators.

3. UX / UI Principles

Mobile-first design (React Native, Tailwind for RN styling).

Use card-based navigation with animations (Framer Motion for RN or Reanimated).

Accessibility compliant (large touch targets, screen reader support).

Use colour-coded sections (e.g., green for safety, orange for risk, blue for knowledge).

Gamify learning: badges, streaks, % completion tracker.

4. Platform Integration

Integrate with existing training hub backend:

Authentication (JWT/session from platform).

Push progress updates (learning time, test results).

Pull learner profile + enrolled courses.

Store data offline with SQLite/AsyncStorage and sync when online.

5. Technical Stack

Frontend: React Native (Expo or bare workflow).

UI components: shadcn/ui for RN, NativeBase, or React Native Paper.

Navigation: React Navigation (stack + tab structure).

State management: Redux Toolkit or Zustand.

Backend integration: REST/GraphQL (match existing training hub API).

Testing: Jest + Detox for E2E.

6. Additional Features

Learning Time Tracking: Background timer to record active learning minutes per module.

Certificate/Badge System: Unlock after quizzes/tests.

Push Notifications: Reminders to continue training.

Offline Mode: Allow learners to continue even without connectivity.

Analytics Dashboard (admin side): Track learner progress, quiz scores, engagement time.

Deliverables

React Native project scaffold (Expo or bare).

Components:

ModuleScreen (text, images, notes).

QuizScreen (interactive Knowledge Stops).

ProgressTracker (visual completion + learning time).

GlossaryScreen (searchable dictionary).

SafetyReminderCard (styled OperateSAFE notes).

API service layer for integration with training hub backend.

Sample seeding of 2–3 workbook sections to validate content model.

Documentation for how new content can be added (JSON/Markdown import pipeline).

⚡ Key UX Goal: Elevate the learning journey — make it interactive, mobile-friendly, and engaging so learners can practice, reflect, and retain knowledge, not just read it.