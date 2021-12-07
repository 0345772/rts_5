import React from 'react';

interface SuperListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode
}

export function SuperList<T>(props: SuperListProps<T>) {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  )
}