# Forward Tipping Dumper Digital Workbook

A React Native mobile application that converts the Forward Tipping Dumper Skills Bootcamp workbook into an interactive, mobile-friendly learning experience.

## Features

- **Interactive Learning Modules**: Convert workbook content into engaging mobile modules
- **Knowledge Stops**: Interactive quizzes with multiple question types (multiple choice, checkbox, short answer, scenario)
- **Progress Tracking**: Real-time progress monitoring and learning time tracking
- **Offline Support**: Full offline functionality with data synchronization
- **Glossary**: Searchable dictionary of technical terms
- **Safety Reminders**: Prominent OperateSAFE callouts throughout the content
- **Note-taking**: Personal note-taking capabilities for each module
- **Gamification**: Badges, streaks, and completion tracking

## Technical Stack

- **Frontend**: React Native with Expo
- **UI Components**: React Native Paper
- **Navigation**: React Navigation (Stack + Tab)
- **State Management**: Zustand
- **Database**: SQLite (offline) + AsyncStorage
- **Backend Integration**: REST API integration with training hub
- **Styling**: React Native Paper theming

## Project Structure

```
src/
├── components/          # Reusable UI components
├── screens/            # Screen components
│   ├── HomeScreen.tsx
│   ├── ModuleScreen.tsx
│   ├── QuizScreen.tsx
│   ├── ProgressScreen.tsx
│   └── GlossaryScreen.tsx
├── services/           # API and storage services
│   ├── api.ts
│   └── offlineStorage.ts
├── store/              # State management
│   └── useCourseStore.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── data/               # Sample data and content
│   └── sampleData.ts
└── utils/              # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd forward-tipping-dumper-workbook
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Content Management

### Adding New Content

The application uses a JSON-based content structure. To add new modules or content:

1. Update the `sampleData.ts` file with new content
2. Follow the existing structure for modules, quizzes, and glossary items
3. The app will automatically load the new content

### Content Structure

```typescript
interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  glossary: GlossaryItem[];
}

interface Module {
  id: string;
  title: string;
  content: ContentItem[];
  quizzes: Quiz[];
}

interface ContentItem {
  type: 'text' | 'image' | 'note' | 'safety_reminder' | 'video' | 'qr_code';
  data?: string;
  url?: string;
  caption?: string;
  // ... other properties
}
```

## API Integration

The app integrates with the existing training hub backend at `https://operator-skills-hub-v4.vercel.app/`. Key integration points:

- **Authentication**: JWT-based authentication
- **Progress Sync**: Real-time progress synchronization
- **Quiz Results**: Automatic quiz result submission
- **Analytics**: Learning time and engagement tracking

## Offline Functionality

The app provides full offline support:

- **SQLite Database**: Local data storage for all content and progress
- **AsyncStorage**: Quick access to frequently used data
- **Sync Queue**: Automatic synchronization when online
- **Conflict Resolution**: Handles data conflicts during sync

## Development

### Code Style

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- React Native Paper for consistent UI

### Testing

```bash
# Run unit tests
npm test

# Run E2E tests
npm run e2e
```

### Building for Production

```bash
# Build for iOS
expo build:ios

# Build for Android
expo build:android
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team or create an issue in the repository.

