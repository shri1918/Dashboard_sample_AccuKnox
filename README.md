#### Dashboard Application
This is a React-based Dashboard Application that allows users to manage widgets across different categories. The application includes features such as adding, removing, and hiding widgets, as well as filtering widgets by name using a search bar.

#### Features
    ### Dashboard Management: Organize widgets into different categories.
    ### Add Widgets: Easily add new widgets to any category using a side drawer form.
    ### Remove Widgets: Remove widgets from categories.
    ### Hide/Show Widgets: Toggle visibility of widgets within categories.
    ### Search Functionality: Filter widgets by name or title using a search bar.
    ### Responsive Design: The dashboard is responsive and adapts to different screen sizes.

#### Tech Stack
    ### React: Frontend library for building user interfaces.
    ### Redux Toolkit: State management for handling categories and widgets.
    ### Material-UI: UI components library for styling and layout.
    ### JavaScript (ES6+): The primary programming language used.

#### Usage
    ### Adding a Widget:
        
        Click on the "Add Widget" button located in the top-right corner of the dashboard.
        A side drawer will open with a form to add a new widget.
        Fill in the widget's name and text, select the category, and submit.
        Removing a Widget:

    ### Click on the "Remove" button within any widget card to remove it from the category.
        Hide/Show Widgets:

        Use the checkboxes in the Add Widget form to toggle the visibility of widgets in each category.
        Search Widgets:

Use the search bar in the header to filter widgets by their name or title.

    
├── src
│   ├── components
│   │   ├── Dashboard.js
│   │   ├── Category.js
│   │   ├── Widget.js
│   │   └── AddWidgetForm.js
│   ├── features
│   │   └── dashboard
│   │       ├── dashboardSlice.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
