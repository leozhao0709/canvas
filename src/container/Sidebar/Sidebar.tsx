import * as React from 'react';
import * as styles from './Sidebar.css';

interface SidebarProps extends React.HtmlHTMLAttributes<{}> {}

export const Sidebar: React.SFC<SidebarProps> = (props: SidebarProps) => {
    return <div className={styles.sidebar}>SideBar</div>;
};

Sidebar.defaultProps = {};
