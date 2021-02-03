import React from 'react';

export default function AudioPlay({ audio }): JSX.Element {
  return (
    <audio src={`../../../assets/audio/${audio}`} autoPlay></audio>
  )
}
