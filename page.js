import Image from "next/image";

import { userAgent } from "next/server"


//activity 2


export function UserData({title}) {
  return (
   <div>
   <h1>{title}</h1>
   </div>
  )
}

export default function page() {
  return (
    <div>
      
    <UserData title="Dashboard" />
    
      
    </div>
  )
}


//activity 3
export function Greeting({name,age}) {
  return (
   <div>
   <h1>{`Hello ${name}, you are ${age} years old.`}</h1>
   </div>
  )
}


export default function page() {
  return (
    <div>
      <Greeting name="sahana" age={21} />
    </div>
  )
}

//activity 4


export function PriceTag({price,currency}) {
  return (
   <div>
   <h1>{`Price: ${price} ${currency}`}</h1>
   </div>
  )
}
export default function page() {
  return (
    <div>
<PriceTag price={100} currency="USD" />
    </div>
  )
}
//activity 5
function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}
    </div>
  );
}
export default function App() {
  return (
    <div>
      <UserStatus isLoggedIn={true} />
      <UserStatus isLoggedIn={false} />
    </div>
  );
}
//activity 6
function Button({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}
export default function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}
//activity 7
export function ProductCard({name,price,inStock}) {
  return (
   <div>
   <h1>{name}</h1>
   <p>Price: {price}</p>
   <p>{inStock ? "In Stock" : "Out of Stock"}</p>
   </div>
  )
}
export default function page() {
  return (
    <div>
      <ProductCard name="Laptop" price={999} inStock={true} />
      <ProductCard name="Smartphone" price={499} inStock={false} />
    </div>
  )
}

//activity 8
function UserList({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  const users = ["John", "Jane", "Alice"];

  return <UserList users={users} />;
}

//actvity 9
import { useState } from "react";

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default function Page() {
  return <Counter initialValue={0} />;
}
//activity 10
function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      margin: "10px"
    }}>
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <Card>
      <h2>Title</h2>
      <p>Description</p>
    </Card>
  );
}
//activity 11
function Child({ onClickHandler }) {
  return (
    <button onClick={onClickHandler}>
      Click Me
    </button>
  );
}

function Parent() {
  function handleClick() {
    console.log("Button clicked in Child!");
  }

  return <Child onClickHandler={handleClick} />;
}

export default Parent;
//activity 12
function Box({ color, size }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: size,
        height: size,
      }}
    ></div>
  );
}

export default function Page() {
  return (
    <div>
      <Box color="red" size="100px" />
      <Box color="blue" size="150px" />
    </div>
  );
}
//activity 13
function ProfileCard({ name, image, role, isOnline }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "10px",
      width: "200px",
      textAlign: "center",
      margin: "10px"
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: "80px", height: "80px", borderRadius: "50%" }}
      />

      <h3>{name}</h3>
      <p>{role}</p>

      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          margin: "0 auto",
          backgroundColor: isOnline ? "green" : "gray"
        }}
      ></div>
    </div>
  );
}
export default function Page() {
  return (
    <div style={{ display: "flex" }}>
      <ProfileCard
        name="John"
        role="Developer"
        image="https://via.placeholder.com/80"
        isOnline={true}
      />

      <ProfileCard
        name="Jane"
        role="Designer"
        image="https://via.placeholder.com/80"
        isOnline={false}
      />
    </div>
  );
}
//activity 14
function Table({ data }) {
  if (!data || data.length === 0) return <p>No data available</p>;

  const headers = Object.keys(data[0]);

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          {headers.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((key) => (
              <td key={key}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
//activty 15
function Layout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {children}
    </div>
  );
}
function Sidebar({ children }) {
  return (
    <div style={{
      width: "200px",
      background: "#f4f4f4",
      padding: "20px"
    }}>
      {children}
    </div>
  );
}
function MainContent({ children }) {
  return (
    <div style={{
      flex: 1,
      padding: "20px"
    }}>
      {children}
    </div>
  );
}
export default function Page() {
  return (
    <Layout>
      <Sidebar>
        <h3>Menu</h3>
        <p>Home</p>
        <p>About</p>
      </Sidebar>

      <MainContent>
        <h1>Welcome</h1>
        <p>This is main content area</p>
      </MainContent>
    </Layout>
  );
}