// Workout Data - 6-day Push/Pull/Legs Hypertrophy Program
const workoutProgram = {
    "days": [
        {
            "name": "Day 1: Push",
            "muscleGroups": ["Chest", "Shoulders", "Triceps"],
            "exercises": [
                { "name": "Bench Press", "sets": 4, "reps": "8-10", "rest": 90 },
                { "name": "Incline Dumbbell Press", "sets": 3, "reps": "10-12", "rest": 75 },
                { "name": "Overhead Press", "sets": 4, "reps": "8-10", "rest": 90 },
                { "name": "Lateral Raises", "sets": 3, "reps": "12-15", "rest": 60 },
                { "name": "Tricep Pushdown", "sets": 4, "reps": "10-12", "rest": 60 },
                { "name": "Overhead Tricep Extension", "sets": 3, "reps": "10-12", "rest": 60 }
            ]
        },
        {
            "name": "Day 2: Pull",
            "muscleGroups": ["Back", "Biceps"],
            "exercises": [
                { "name": "Deadlift", "sets": 4, "reps": "5-8", "rest": 120 },
                { "name": "Pull-Ups", "sets": 4, "reps": "AMRAP", "rest": 90 },
                { "name": "Bent-Over Rows", "sets": 4, "reps": "8-10", "rest": 90 },
                { "name": "Lat Pulldown", "sets": 3, "reps": "10-12", "rest": 75 },
                { "name": "Face Pulls", "sets": 3, "reps": "15-20", "rest": 60 },
                { "name": "Barbell Curl", "sets": 4, "reps": "10-12", "rest": 75 },
                { "name": "Hammer Curl", "sets": 3, "reps": "10-12", "rest": 60 }
            ]
        },
        {
            "name": "Day 3: Legs",
            "muscleGroups": ["Quads", "Hamstrings", "Glutes", "Calves"],
            "exercises": [
                { "name": "Squats", "sets": 5, "reps": "5-8", "rest": 120 },
                { "name": "Leg Press", "sets": 4, "reps": "8-10", "rest": 90 },
                { "name": "Romanian Deadlift", "sets": 4, "reps": "8-10", "rest": 90 },
                { "name": "Leg Curl", "sets": 3, "reps": "10-12", "rest": 75 },
                { "name": "Leg Extension", "sets": 3, "reps": "10-12", "rest": 75 },
                { "name": "Standing Calf Raise", "sets": 4, "reps": "15-20", "rest": 60 },
                { "name": "Seated Calf Raise", "sets": 3, "reps": "15-20", "rest": 60 }
            ]
        },
        {
            "name": "Day 4: Push",
            "muscleGroups": ["Chest", "Shoulders", "Triceps"],
            "exercises": [
                { "name": "Incline Barbell Press", "sets": 4, "reps": "8-10", "rest": 90 },
                { "name": "Dumbbell Flyes", "sets": 3, "reps": "12-15", "rest": 60 },
                { "name": "Arnold Press", "sets": 4, "reps": "8-10", "rest": 90 },
                { "name": "Front Raises", "sets": 3, "reps": "12-15", "rest": 60 },
                { "name": "Close-Grip Bench Press", "sets": 4, "reps": "8-10", "rest": 75 },
                { "name": "Tricep Dips", "sets": 3, "reps": "AMRAP", "rest": 60 },
                { "name": "Cable Rope Pushdown", "sets": 3, "reps": "12-15", "rest": 60 }
            ]
        },
        {
            "name": "Day 5: Pull",
            "muscleGroups": ["Back", "Biceps"],
            "exercises": [
                { "name": "Bent-Over Barbell Row", "sets": 4, "reps": "8-10", "rest": 90 },
                { "name": "Lat Pulldown", "sets": 4, "reps": "10-12", "rest": 75 },
                { "name": "T-Bar Row", "sets": 3, "reps": "8-10", "rest": 90 },
                { "name": "Seated Cable Row", "sets": 3, "reps": "10-12", "rest": 75 },
                { "name": "Hammer Strength Row", "sets": 3, "reps": "10-12", "rest": 75 },
                { "name": "Preacher Curl", "sets": 4, "reps": "10-12", "rest": 75 },
                { "name": "Cable Curl", "sets": 3, "reps": "12-15", "rest": 60 },
                { "name": "Reverse Curl", "sets": 3, "reps": "12-15", "rest": 60 }
            ]
        },
        {
            "name": "Day 6: Legs",
            "muscleGroups": ["Quads", "Hamstrings", "Glutes", "Calves"],
            "exercises": [
                { "name": "Front Squat", "sets": 4, "reps": "8-10", "rest": 90 },
                { "name": "Hack Squat", "sets": 4, "reps": "8-10", "rest": 90 },
                { "name": "Leg Press", "sets": 3, "reps": "10-12", "rest": 90 },
                { "name": "Walking Lunges", "sets": 3, "reps": "12-15 each", "rest": 90 },
                { "name": "Leg Curl", "sets": 4, "reps": "10-12", "rest": 75 },
                { "name": "Stiff-Legged Deadlift", "sets": 3, "reps": "12-15", "rest": 90 },
                { "name": "Hip Thrust", "sets": 4, "reps": "10-12", "rest": 90 },
                { "name": "Standing Calf Raise", "sets": 4, "reps": "15-20", "rest": 60 }
            ]
        }
    ]
};

// DOM Elements
let selectedDayIndex = null;
let timerInterval = null;
let timerSeconds = 0;
let timerIsRunning = false;

// DOM Elements
const dayCardsContainer = document.querySelector('.schedule-days');
const workoutDayTitle = document.getElementById('workout-day-title');
const workoutExercisesContainer = document.getElementById('workout-exercises');
const timerDisplay = document.getElementById('timer-display');
const timerStartBtn = document.getElementById('timer-start');
const timerPauseBtn = document.getElementById('timer-pause');
const timerResetBtn = document.getElementById('timer-reset');
const timerInput = document.getElementById('timer-input');
const statsContent = document.getElementById('stats-content');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderSchedule();
    updateStats();
    setupTimerControls();
});

// Load data from localStorage or initialize
function loadData() {
    const savedData = localStorage.getItem('fitnessDashboardData');
    if (savedData) {
        try {
            const parsed = JSON.parse(savedData);
            // Merge with default program to ensure we have all exercises
            workoutProgram.days = workoutProgram.days.map((day, index) => {
                const savedDay = parsed.days?.[index];
                if (!savedDay) return day;
                return {
                    ...day,
                    exercises: day.exercises.map((exercise, i) => {
                        const savedExercise = savedDay.exercises?.[i];
                        return {
                            ...exercise,
                            completed: savedExercise?.completed ?? false
                        };
                    })
                };
            });
        } catch (e) {
            console.error('Error parsing saved data:', e);
            initializeData();
        }
    } else {
        initializeData();
    }
}

// Initialize data with default values
function initializeData() {
    workoutProgram.days.forEach(day => {
        day.exercises.forEach(exercise => {
            exercise.completed = false;
        });
    });
    saveData();
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('fitnessDashboardData', JSON.stringify(workoutProgram));
}

// Render the schedule cards
function renderSchedule() {
    dayCardsContainer.innerHTML = '';
    workoutProgram.days.forEach((day, index) => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        dayCard.dataset.index = index;

        // Check if day is completed
        const isDayCompleted = day.exercises.every(ex => ex.completed);
        if (isDayCompleted) {
            dayCard.classList.add('active');
        }

        dayCard.innerHTML = `
            <div class="day-name">${day.name.split(':')[0]}</div>
            <div class="muscle-groups">${day.muscleGroups.join(', ')}</div>
            <div class="exercise-count">${day.exercises.length} exercises</div>
        `;

        dayCard.addEventListener('click', () => {
            selectDay(index);
        });

        dayCardsContainer.appendChild(dayCard);
    });

    // Auto-select first day if none selected
    if (selectedDayIndex === null && workoutProgram.days.length > 0) {
        selectDay(0);
    }
}

// Select a day and display its workout
function selectDay(index) {
    selectedDayIndex = index;

    // Update active states
    document.querySelectorAll('.day-card').forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    const day = workoutProgram.days[index];
    workoutDayTitle.textContent = day.name;

    // Render exercises
    workoutExercisesContainer.innerHTML = '';
    day.exercises.forEach((exercise, exerciseIndex) => {
        const exerciseEl = document.createElement('div');
        exerciseEl.className = `exercise-item${exercise.completed ? ' completed' : ''}`;
        exerciseEl.innerHTML = `
            <div class="exercise-info">
                <div class="exercise-name">${exercise.name}</div>
                <div class="exercise-details">${exercise.sets} sets × ${exercise.reps} reps</div>
            </div>
            <div class="exercise-actions">
                <button class="btn ${exercise.completed ? 'reset' : 'complete'}">
                    ${exercise.completed ? 'Undo' : 'Complete'}
                </button>
            </div>
        `;

        const btn = exerciseEl.querySelector('.btn');
        btn.addEventListener('click', () => {
            toggleExerciseCompletion(index, exerciseIndex);
        });

        workoutExercisesContainer.appendChild(exerciseEl);
    });
}

// Toggle exercise completion status
function toggleExerciseCompletion(dayIndex, exerciseIndex) {
    const exercise = workoutProgram.days[dayIndex].exercises[exerciseIndex];
    exercise.completed = !exercise.completed;

    // Update UI
    const exerciseItems = workoutExercisesContainer.querySelectorAll('.exercise-item');
    const exerciseItem = exerciseItems[exerciseIndex];
    exerciseItem.classList.toggle('completed');

    const btn = exerciseItem.querySelector('.btn');
    btn.textContent = exercise.completed ? 'Undo' : 'Complete';
    btn.classList.toggle('complete', !exercise.completed);
    btn.classList.toggle('reset', exercise.completed);

    // Update day card active state
    updateDayCardState(dayIndex);

    // Save and update stats
    saveData();
    updateStats();
}

// Update day card active/completed state
function updateDayCardState(dayIndex) {
    const day = workoutProgram.days[dayIndex];
    const isDayCompleted = day.exercises.every(ex => ex.completed);
    const dayCard = dayCardsContainer.querySelector(`.day-card[data-index="${dayIndex}"]`);

    if (dayCard) {
        if (isDayCompleted) {
            dayCard.classList.add('active');
        } else {
            // Only remove active if it's not the selected day
            if (selectedDayIndex !== dayIndex) {
                dayCard.classList.remove('active');
            }
            // Keep visual indication of progress
            const progress = day.exercises.filter(ex => ex.completed).length / day.exercises.length;
            if (progress > 0 && progress < 1) {
                dayCard.style.background = `linear-gradient(135deg, rgba(79, 172, 254, ${0.1 + progress * 0.2}), rgba(45, 45, 45, 0.8))`;
            }
        }
    }
}

// Timer Functions
function startTimer() {
    if (!timerIsRunning) {
        timerIsRunning = true;
        timerStartBtn.disabled = true;
        timerPauseBtn.disabled = false;
        timerResetBtn.disabled = false;

        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    if (timerIsRunning) {
        timerIsRunning = false;
        timerStartBtn.disabled = false;
        timerPauseBtn.disabled = true;
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    timerIsRunning = false;
    timerSeconds = 0;
    timerStartBtn.disabled = false;
    timerPauseBtn.disabled = true;
    timerResetBtn.disabled = true;
    clearInterval(timerInterval);
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const timeString =
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');
    timerDisplay.textContent = timeString;
}

// Setup timer event listeners
function setupTimerControls() {
    timerStartBtn.addEventListener('click', () => {
        const inputSeconds = parseInt(timerInput.value);
        if (!isNaN(inputSeconds) && inputSeconds > 0) {
            timerSeconds = inputSeconds;
            updateTimerDisplay();
        }
        startTimer();
    });

    timerPauseBtn.addEventListener('click', pauseTimer);
    timerResetBtn.addEventListener('click', resetTimer);

    // Allow Enter key to start timer
    timerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            timerStartBtn.click();
        }
    });
}

// Update statistics display
function updateStats() {
    let totalExercises = 0;
    let completedExercises = 0;
    let completedDays = 0;

    workoutProgram.days.forEach(day => {
        const dayExercises = day.exercises;
        totalExercises += dayExercises.length;
        const dayCompleted = dayExercises.filter(ex => ex.completed).length;
        completedExercises += dayCompleted;

        if (dayCompleted === dayExercises.length) {
            completedDays++;
        }
    });

    const completionRate = totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
    const weeklyCompletion = completedDays / workoutProgram.days.length * 100;

    statsContent.innerHTML = `
        <div class="stat-item">
            <span class="stat-label">Workouts Completed</span>
            <span class="stat-value">${completedDays}/${workoutProgram.days.length}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Exercises Completed</span>
            <span class="stat-value">${completedExercises}/${totalExercises}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Overall Progress</span>
            <div class="progress-container">
                <div class="progress-bar" style="width: ${completionRate}%"></div>
            </div>
            <span class="stat-value">${completionRate}%</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Weekly Consistency</span>
            <div class="progress-container">
                <div class="progress-bar" style="width: ${weeklyCompletion}%"></div>
            </div>
            <span class="stat-value">${Math.round(weeklyCompletion)}%</span>
        </div>
    `;
}