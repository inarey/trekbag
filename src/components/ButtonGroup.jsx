import Button from './Button';

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  const secondaryButtons = [
    { text: 'Mark all as complete', onClick: handleMarkAllAsComplete },
    { text: 'Mark all as incomplete', onClick: handleMarkAllAsIncomplete },
    { text: 'Reset to initial', onClick: handleResetToInitial },
    { text: 'Remove all items', onClick: handleRemoveAllItems },
  ];

  return (
    <section className='button-group'>
      {secondaryButtons.map((button) => (
        <Button
          key={button.text + button.onClick.toString()}
          buttonType='secondary'
          onClick={button.onClick}
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
