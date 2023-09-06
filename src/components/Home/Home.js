import Loader from "../Loader/Loader";
import { useValue } from "../../context";
import Style from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const { contactList, isLoading, deleteContact } = useValue();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className={Style.addContact}>
        <Link to="add-contact">
          <button>Add New Contact</button>
        </Link>
      </div>
      <div className={Style.contactTable}>
        <table className="table">
          <thead>
            <tr className={Style.tableHead}>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactList.map((contact, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <Link to={`edit-contact/${contact.id}`}>
                    <button className={Style.editButton}>Edit</button>
                  </Link>

                  <button
                    onClick={() => deleteContact(contact.id)}
                    className={Style.deleteButton}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
