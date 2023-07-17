import LoadCss from './Loader.module.css';

export function Loader() {
  return (
    <>
      <div className={LoadCss.loader}>
        <h2 className={LoadCss.loaderH2}>Йде завантаження...</h2>
      </div>
    </>
  );
}
