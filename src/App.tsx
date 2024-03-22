import { useCallback, useState } from "react";
import Search from "./components/Search";

const allUsers = ["john", "alex", "anna", "kyle", "rafa"];

const shuffle = (array: string[]) => {
  let currentIndex = array.length,
    randomIndex;
  const newArray = [...array];
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
};

function App() {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text: string) => {
    console.log(users[0]);
    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  }, [users]);

  const handleShuffle = () => {
    setUsers(shuffle(allUsers));
  };

  return (
    <div>
      <button onClick={handleShuffle}>Shuffle</button>
      <Search onChange={handleSearch} />
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
