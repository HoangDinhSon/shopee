import useRouteElements from './useRouteElements'
function App() {
  const useRouteElement = useRouteElements()
  return <div>{useRouteElement}</div>
}

export default App
