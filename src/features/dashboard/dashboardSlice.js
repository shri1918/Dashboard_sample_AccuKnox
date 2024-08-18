import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 'cspm-executive-dashboard',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 'widget-1', name: 'Cloud Accounts', text: 'Some data for Cloud Accounts' },
        { id: 'widget-2', name: 'Cloud Account Risk Assessment', text: 'Some data for Risk Assessment' },
      ],
    },
    {
      id: 'cwpp-dashboard',
      name: 'CWPP Dashboard',
      widgets: [],
    },
    {
      id: 'registry-scan',
      name: 'Registry Scan',
      widgets: [],
    },
  ],
  hiddenWidgets: {},
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    hideWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      if (!state.hiddenWidgets[categoryId]) {
        state.hiddenWidgets[categoryId] = [];
      }
      if (!state.hiddenWidgets[categoryId].includes(widgetId)) {
        state.hiddenWidgets[categoryId].push(widgetId);
      }
    },
    showWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      if (state.hiddenWidgets[categoryId]) {
        state.hiddenWidgets[categoryId] = state.hiddenWidgets[categoryId].filter(id => id !== widgetId);
      }
    },
  },
});

export const { addWidget, removeWidget, hideWidget, showWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
