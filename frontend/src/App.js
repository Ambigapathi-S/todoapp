import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useState } from 'react';
import apiRequest from './components/apiRequests';
import AddTask from './components/addTask';
function App() {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState(" ");
  const [openPopup, setOpenPopup] = useState(false);
  const [filterItem, setFilterItem] = useState('');
  const [showFilterField, setShowFilterField] = useState(false);
  useEffect(() => {
    const API_URL = "http://localhost:8080/api/todo/lists";
    const fetchItems = async () => {
      try {
        const response = await apiRequest(API_URL);
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {
        console.log(err);
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchItems();
    }, 1000);
  }, []);
  const handleCheck = async (id) => {
    const GET_LIST = `http://localhost:8080/api/todo/lists/${id}`;
    const response = await apiRequest(GET_LIST);
    const listItem = await response.json();

    const API_URL = `http://localhost:8080/api/todo/update/${id}`;
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "checked": checked, "description": listItem.description })
    };
    fetch(API_URL, requestOptions)
      .then(response => response.json())
      .then((data) => { fetchItems(); });

  };
  const deleteTask = async (id) => {
    fetch(`http://localhost:8080/api/todo/delete/${id}`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
  const showPopup = () => {
    setOpenPopup(true);
  }

  const saveTask = (e) => {
    e.preventDefault();
    const API_URL = "http://localhost:8080/api/todo/create";
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "description": description })
    };
    fetch(API_URL, requestOptions)
      .then(response => response.json())
      .then((data) => { fetchItems(); setOpenPopup(false); setDescription(" ") });
  }

  const fetchItems = async () => {
    const GET_LIST = "http://localhost:8080/api/todo/lists";
    try {
      const response = await apiRequest(GET_LIST);
      const listItems = await response.json();
      setItems(listItems);
    } catch (err) {
      console.log(err);
      setIsError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const filterList = async (data) => {
    setFilterItem(data);
  }

  const toggleFilter = () => {
    setShowFilterField(!showFilterField);
  }

  const cancelTask = () => {
    setOpenPopup(false);
  }
  return (
    <div className="App">
      <Header title="Todo List" filterItem={filterItem} setFilterItem={setFilterItem} filterList={filterList} toggleFilter={toggleFilter} showFilterField={showFilterField} setShowFilterField={setShowFilterField} />
      <main>
        {isLoading && <p>Loading Items</p>}
        {isError && <p>{isError}</p>}
        {!isError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.description.toLowerCase().includes(filterItem.toLowerCase())
            )}
            handleCheck={handleCheck}
            deleteTask={deleteTask}
            checked={checked}
            setChecked={setChecked}
          />
        )}
      </main>

      <span className='plusIcon'><CiCirclePlus onClick={() => showPopup()} /></span>
      <Footer length={items.length} />
      {openPopup && <AddTask description={description} setDescription={setDescription} saveTask={saveTask} cancelTask={cancelTask} />}
    </div>
  );
}

export default App;
