import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function DynamicRoutes() {
  const modules: any = import.meta.glob('/src/pages/**/page.tsx', { eager: true });
  // console.log(modules);

  const routes = [];
  for (const path of Object.keys(modules)) {
    const fileName = path.match(/pages\/(.*)\/page\.tsx/)?.[1];
    if (!fileName) {
      routes.push({
        path: `/`,
        Element: modules[path].default,
      });
      continue;
    }

    const normalizedPathName = fileName.replace(/\[(.*?)\]/, ":$1");
    // console.log(`${fileName} -> ${normalizedPathName}`); // debug
    routes.push({
      path: `/${normalizedPathName}`,
      Element: modules[path].default,
    });
  }
  console.log(routes);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(route =>
            <Route key={route.path} path={route.path} element={<route.Element />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}
