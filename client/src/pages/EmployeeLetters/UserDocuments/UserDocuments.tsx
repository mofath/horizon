import "./UserDocuments.scss";
import EmptyDocumentsBoxImg from "../../../assets/images/empty-documents-box.png";

interface UserDocumentsProps {}

const UserDocuments: React.FC<UserDocumentsProps> = ({}) => {
  return (
    <div className="user-documents">
      <p className="user-documents__title">Users Document</p>
      <div className="user-documents__empty-container">
        <img
          src={EmptyDocumentsBoxImg}
          alt="Empty documents"
          className="user-documents__empty-img"
        />
        <div className="user-documents__text-container">
          <p className="user-documents__message">There are no user document</p>
          <p className="user-documents__description">
            User documents have not been added yet; we're in the process of
            creating them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDocuments;
