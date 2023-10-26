const PageHeading = ({ title, subtitle, classNames }) => {
  return (
    <div className={classNames}>
      <h1 className="mb-1 text-xl font-semibold">{title}</h1>
      {subtitle && <p className="text-secondary">{subtitle}</p>}
    </div>
  );
};

export default PageHeading;
