import { ReactNode } from "react";
import styles from '@/styles/Layout.module.scss';


type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps>   = ({children}) => {
    return (
        <nav className={styles.nav}>
            <h1>NRS</h1>
        </nav>
    )
}

export default Layout;