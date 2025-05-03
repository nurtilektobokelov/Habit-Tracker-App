# Habit Tracker Web App

## Description
The **Habit Tracker** app is a web application designed to help users track their habits, visualize their performance, and maintain consistency. Users can log in with their email or third-party authentication (Google, Facebook, GitHub), create and manage habits, and view their progress through a visualized bar chart.

This project was developed as part of my personal learning process and is aimed at improving habit-building by providing users with a simple, yet powerful tool for habit tracking and performance evaluation.

## Tech Stack
- **Frontend**: 
  - **React**: For building the user interface and managing components.
  - **React Router**: For handling navigation and routing.
  - **Material UI**: For a modern and responsive design using pre-built components.
  - **React Query**: For data fetching and state management.
  - **React Hook Form**: For handling form inputs and validation.
  
- **Backend**:
  - **Firebase**: 
    - **Authentication**: To manage user sign-up and login (email/password, Google, Facebook, GitHub).
    - **Realtime Database**: To store user data, habits, and their completion status.

## Features
- **Authentication**: 
  - Users can create an account using email and password or log in with Google, Facebook, or GitHub.
  - Login as a guest to try the app without creating an account.

- **Habit Management**: 
  - Add, edit, and delete habits.
  - Mark habits as `completed`, `failed`, or `skipped`.
  - Visualize weekly performance in a bar chart.
  
- **Customizable UI**: 
  - Users can customize the app’s primary and secondary colors.
  - Toggle between light and dark modes.
  
- **Multi-language Support**: 
  - Available in **English**, **Spanish**, and **Polish**.
  
- **Progress Tracking**: 
  - View summaries of habit performance for the last week, current week, current day, and overall.

## How to Run the Project

### Prerequisites
Before running the app locally, ensure that you have the following installed:
- **Node.js** (with npm or yarn)
- **Firebase account** to set up Firebase services

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/habit-tracker-app.git
