import "./PageTitle.scss";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div>
      <h1 className="page-title">{title}</h1>
    </div>
  );
};

export default PageTitle;
