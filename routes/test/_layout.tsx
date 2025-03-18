import { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) => {
    const Component = props.Component;
    return(
        <div>
            <h1>Bienvenido a la practica 2! </h1>
            <Component />
        </div>
    );
}

export default Layout;