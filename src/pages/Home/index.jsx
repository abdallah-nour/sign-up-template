export default function Home({ setAuthentication }) {
  return <div style={{ margin: '0 auto' }}>
    <h1>Home Page</h1>
    {/* here we should also make api request to delete the cookies then we make Authentication false */}
    <input type='button' value='Log out' onClick={() => setAuthentication(false)} style={{cursor:'pointer', padding:'8px 15px'}} />
  </div>
}




