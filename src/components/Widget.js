import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../features/dashboard/dashboardSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import PieChart from './PieChart';
import RangeScale from './RangeScale';
import AddIcon from '@mui/icons-material/Add';

const Widget = ({ widget, categoryId, isDefault, onAddWidget }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  const renderCategorySpecificContent = () => {
    switch (categoryId) {
      case 'cspm-executive-dashboard':
        return (
          <>
            <Typography variant="h5" component="div">
              {widget.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {widget.title || 'No title provided'}
            </Typography>
            <PieChart data={widget.data} />
          </>
        );

      case 'registry-scan':
        return (
          <>
            <Typography variant="h5" component="div">
              {widget.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {widget.title || 'No title provided'}
            </Typography>
            <RangeScale data={widget.data} />
          </>
        );

      default:
        return (
          <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" component="div">
              {widget.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {widget.text}
            </Typography>
          </CardContent>
        );
    }
  };

  return (
    <Card
      style={{
        marginLeft: '20px',
        width: '480px',
        margin: '10px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        border: isDefault ? '1px dashed #ccc' : '1px solid #ddd',
        position: 'relative',
        height: '200px',
      }}
    >
      {!isDefault && (
        <IconButton
          style={{ position: 'absolute', top: '10px', right: '10px' }}
          size="small"
          onClick={handleRemove}
        >
          <CloseIcon />
        </IconButton>
      )}

      {isDefault ? (
        <Button variant="contained" onClick={onAddWidget} style={{backgroundColor: '#fff', color: '#666'}}  startIcon={<AddIcon />}>
          Add Widget
        </Button>
      ) : (
        <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
          {renderCategorySpecificContent()}
        </CardContent>
      )}
    </Card>
  );
};

export default Widget;
