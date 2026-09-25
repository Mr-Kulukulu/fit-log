# 🏋️ FitLog — Workout Library

FitLog is a modern and responsive workout library built with **Next.js, TypeScript, Tailwind CSS, and DaisyUI**. It allows users to explore workouts, view detailed workout information, create a personal workout plan, save workouts for later, and track their progress.

## 🚀 Live Website

**Live Demo:** `https://your-vercel-url.vercel.app](https://fit-log-fawn.vercel.app/`

## 📌 Project Description

FitLog is a simple workout management application designed for people who want to organize their daily workouts.

Users can browse different exercises, view workout details, add exercises to their daily plan, save workouts for later, sort workouts, mark exercises as completed, and remove workouts from their plan.

The application has a clean dark-themed interface with a responsive design for mobile, tablet, and desktop devices.

## 🛠️ Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Icons
* React Toastify
* Next.js Image
* Context API
* REST API

## ✨ Features

### 1. 🏋️ Workout Library

Users can browse a collection of workouts displayed in a responsive card-based grid.

Each workout card shows:

* Workout image
* Workout name
* Muscle groups
* Equipment
* Duration
* Calories
* Rating

### 2. 📋 Workout Details

Users can click any workout to open its detailed page.

The details page includes:

* Workout description
* Muscle groups
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories
* Rating
* Step-by-step instructions

### 3. ➕ Add Workout to Plan

Users can add workouts to their **Today's Plan**.

The Plan counter in the navbar updates automatically when a workout is added.

Duplicate workouts are prevented from being added to the plan.

### 4. 🔖 Save Workouts for Later

Users can save workouts that they want to complete later.

The Saved counter updates automatically when workouts are saved.

### 5. 📊 My Plan Dashboard

The My Plan page provides a simple overview of the user's workouts.

It displays:

* Total exercises
* Total workout minutes
* Total calories

The metrics update automatically when workouts are added or removed.

### 6. 🔄 Today's Plan and Saved Tabs

Users can switch between:

* Today's Plan
* Saved

Each tab displays its own workouts and metrics.

### 7. ↕️ Workout Sorting

Users can sort their current workout list by:

* Duration
* Calories
* Rating

The default sorting option is **Duration**.

### 8. ✅ Mark Workout as Done

Users can mark a workout as completed.

After completing a workout:

* The workout is removed from the current list.
* A success notification is displayed.
* The workout count and metrics update automatically.

### 9. 🗑️ Remove Workouts

Users can remove workouts from their plan or saved list using the delete button.

A toast notification confirms the removal.

### 10. 📱 Responsive Design

FitLog is designed to work across:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

The navigation bar also changes to a mobile-friendly hamburger menu on smaller screens.

### 11. 🍔 Mobile Navigation

The mobile hamburger menu allows users to quickly access:

* Workouts
* My Plan
* Plan count
* Saved count

The menu can be opened and closed by clicking the hamburger button.

### 12. 🔔 Toast Notifications

FitLog provides instant feedback when users perform actions such as:

* Adding a workout
* Saving a workout
* Removing a workout
* Completing a workout
* Trying to add an existing workout

### 13. ⏳ Loading Animation

A custom loading screen is displayed while workout content is loading.

### 14. ❌ Custom 404 Page

FitLog includes a custom animated 404 page for invalid routes and missing pages.

### 15. 🎨 Dark Gym-Themed UI

The application uses a modern dark interface with a bright lime accent color to create a clean gym-focused visual style.

## 📂 Main Project Structure

```text
fit-log/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── my-plan/
│   │   └── page.tsx
│   └── workouts/
│       └── [id]/
│           └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WorkoutCard.tsx
│   ├── WorkoutLibrary.tsx
│   ├── Footer.tsx
│   ├── Myplan.tsx
│   └── WorkoutActions.tsx
│
├── context/
│   └── WorkoutContext.tsx
│
├── hooks/
│   └── useWorkout.ts
│
├── types/
│   └── workout.ts
│
├── public/
│   ├── logo.png
│   └── banner.png
│
├── next.config.ts
├── package.json
└── README.md
```

## ⚙️ Run Locally

Clone the repository:

```bash
git clone https://github.com/Mr-Kulukulu/fit-log
```

Go to the project directory:

```bash
cd fit-log
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📡 Workout API

FitLog uses the following REST API to load workout data:

```text
https://api.abcz.workers.dev/api/fitlog
```

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🌐 Deployment

The project is deployed using **Vercel**.

**Live Demo:** `https://your-vercel-url.vercel.app`

## 👨‍💻 Developer

**Tonoy Mazumder**

Built with ❤️ using Next.js and TypeScript.

---

### ⭐ FitLog

**TRAIN WITH INTENT. LOG EVERY SET.**
