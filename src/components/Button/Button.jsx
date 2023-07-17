import buttonCss from './Button.module.css';

export function Button({ addMore }) {
  return (
    <button className={buttonCss.Button} onClick={addMore}>
      Load more
    </button>
  );
}
