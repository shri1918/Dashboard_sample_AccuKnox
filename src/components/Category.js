import React from 'react';
import Widget from './Widget';
import { useSelector } from 'react-redux';
const Category = ({ category, toggleDrawer }) => {
  const hiddenWidgets = useSelector(state => state.dashboard.hiddenWidgets);

  const defaultWidgets = [
    { id: `${category.id}-default-1`, name: 'Default Widget 1', text: 'Default data for widget 1' },
    { id: `${category.id}-default-2`, name: 'Default Widget 2', text: 'Default data for widget 2' },
    { id: `${category.id}-default-3`, name: 'Default Widget 3', text: 'Default data for widget 3' },
  ];


  const visibleWidgets = category.widgets.filter(widget => !hiddenWidgets[category.id]?.includes(widget.id));

  let widgetsToShow;
  if (visibleWidgets.length === 0) {
    widgetsToShow = defaultWidgets.map(widget => ({ ...widget, isDefault: true }));
  } else if (visibleWidgets.length < 3) {
    widgetsToShow = [
      ...visibleWidgets,
      ...defaultWidgets.slice(visibleWidgets.length).map(widget => ({ ...widget, isDefault: true }))
    ];
  } else {
    widgetsToShow = visibleWidgets;
  }

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>
        {widgetsToShow.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            categoryId={category.id}
            isDefault={widget.isDefault}
            onAddWidget={() => toggleDrawer(true)}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
