# Canvas - Interactive React Components

A modern React application featuring interactive components <Counter, Text Editor & User Form> with fluid animations and a clean, responsive design.

![image](https://github.com/user-attachments/assets/b7859ab5-d71e-4b36-9060-85b550f126e0)

![image](https://github.com/user-attachments/assets/25400a24-7ad1-4868-9989-16560bb20af6)

![image](https://github.com/user-attachments/assets/5c3b40c8-00f4-4478-aa05-9fe7979df4a3)

![image](https://github.com/user-attachments/assets/a671bbcf-1aae-4667-8a7e-a0f469d5fd00)

## Features

- **Interactive Counter**: Animated counter with persistent state
- **User Form**: Data collection with validation and localStorage persistence
- **Rich Text Editor**: Quill-based editor with custom styling and user data integration
- **Responsive Navigation**: Dynamic navbar with authentication state awareness
- **Smooth Animations**: Spring-based animations throughout the application

## Tech Stack

- **React**: Frontend library for building the user interface
- **React Router**: For application routing and navigation
- **Material UI**: Component library for consistent design
- **React Spring**: Animation library for fluid motion effects
- **React Quill**: Rich text editor integration
- **Local Storage API**: For client-side data persistence
- **CSS-in-JS**: Using MUI's styling solution

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/react-assessment.git

# Navigate to the project directory
cd path/to/counter-form-app

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm start
# or
yarn start
```

The application will be available at http://localhost:3000

### Authentication

The application includes a basic authentication system with:
- Login/logout functionality
- Protected routes
- Authentication state management

# Component Architecture

## Components Overview

- **Counter**: Interactive counting component with animated visual feedback.  
- **Navbar**: Responsive navigation with authentication-aware menu items.  
- **TextEditor**: Rich text editor with user data integration.  
- **UserForm**: Form for collecting and storing user information.  

## State Management

The application uses several state management approaches:  

- **Component-level State**: Each component maintains its own state using React's `useState` hook.  
- **Cross-component Communication**: Custom browser events and shared `localStorage` data.  
- **Persistence Strategy**: `localStorage` for data persistence across browser sessions.  
- **Animation State**: `react-spring` for declarative animations tied to component state.  

## Component Details

### 🔹 Counter Component
- Uses `useState` to track counter value.  
- Implements `localStorage` persistence.  
- Animated background that grows based on counter value.  
- Button click effects using `react-spring`.  

### 🔹 Navbar Component
- Tracks authentication state.  
- Listens to custom `authChange` events.  
- Responsive design with mobile menu.  
- Authentication-aware navigation options.  

### 🔹 TextEditor Component
- Manages editor content with **ReactQuill** integration.  
- Loads user data from `localStorage`.  
- Auto-populates with user data from the **UserForm** component.  
- Animation effects when updating content.  

### 🔹 UserForm Component
- Form data tracked with `useState`.  
- Implements **unsaved changes detection**.  
- Uses `localStorage` for data persistence.  
- Form validation and unique user ID generation.  

## Animation System

Built with React Spring for:
- Smooth transitions between states
- Interactive feedback on user actions
- Background animations based on application state
- Gesture-based interactions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
