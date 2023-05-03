import React from 'react';
import { Link } from 'react-router-dom';

function TermsList({terms}) {
  return (
    <div>
      {terms.map(term => (
        <div className="card mb-4" key={term.id}>
          <div className="card-body">
            <h4 className="card-title"><a href={term.url} target="_blank" rel="noopener noreferrer">{term.title}</a></h4>
            <p className="card-text">{term.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TermsList;