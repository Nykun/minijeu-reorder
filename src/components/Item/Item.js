import React from 'react';
import styles from './Item.module.css';
import { Draggable } from 'react-beautiful-dnd';

const Item = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={String(item.id)} index={index}>
      {(provided) => (
        <div
          className={styles.item}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            className={styles.background}
            style={{ backgroundColor: item.color }}
          >
            {item.text}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Item;
