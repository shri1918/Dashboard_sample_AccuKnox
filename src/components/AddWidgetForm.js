import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget, hideWidget, showWidget } from '../features/dashboard/dashboardSlice';
import { Tabs, Tab, Box, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
const AddWidgetForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.dashboard.categories);
  const hiddenWidgets = useSelector(state => state.dashboard.hiddenWidgets);

  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || '');
  const [tabValue, setTabValue] = useState(categories[0]?.id || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWidget = {
      id: Date.now().toString(),
      name: widgetName,
      text: widgetText,
    };

    dispatch(addWidget({ categoryId: selectedCategory, widget: newWidget }));
    setWidgetName('');
    setWidgetText('');
  };

  const handleCheckboxChange = (categoryId, widgetId, checked) => {
    if (checked) {
      dispatch(showWidget({ categoryId, widgetId }));
    } else {
      dispatch(hideWidget({ categoryId, widgetId }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Tabs 
          value={tabValue} 
          onChange={(e, newValue) => {
            setTabValue(newValue);
            setSelectedCategory(newValue);
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories.map(category => (
            <Tab key={category.id} label={category.name} value={category.id} />
          ))}
        </Tabs>
      </Box>

      <div>
        {categories.map(category => (
          category.id === selectedCategory && (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <div style={{ display: 'inline-grid', paddingLeft: '10px' }}>
                {category.widgets.map(widget => (
                  <FormControlLabel
                    style={{ display: 'inline-block' }}
                    key={widget.id}
                    control={
                      <Checkbox
                        checked={!hiddenWidgets[category.id]?.includes(widget.id)}
                        onChange={(e) => handleCheckboxChange(category.id, widget.id, e.target.checked)}
                      />
                    }
                    label={widget.name}
                  />
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      <TextField 
        label="Widget Name" 
        variant="outlined" 
        value={widgetName} 
        onChange={(e) => setWidgetName(e.target.value)} 
        required 
        fullWidth 
        margin="normal"
      />

      <TextField 
        label="Widget Text" 
        variant="outlined" 
        value={widgetText} 
        onChange={(e) => setWidgetText(e.target.value)} 
        required 
        fullWidth 
        margin="normal"
      />

    <div style={{textAlign: 'center',paddingTop:'10px'}}>
    <Button type="submit" variant="contained" color="primary" style={{backgroundColor: '#fff', color: '#666'}}  startIcon={<AddIcon />}>
    Add Widget
  </Button>
  </div>
    </form>
  );
};

export default AddWidgetForm;
