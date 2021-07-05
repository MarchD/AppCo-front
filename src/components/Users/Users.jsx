import React from 'react';
import styles from './Users.module.scss';
import classNames from "classnames";
import {BreadCrumbs} from "../globalComponents/BreadCrumbs";
import {USERS_PAGE_ROUTER} from "../App/AppRoutes/routesConst";
import {UsersTable} from "./UsersTable";
import {Pagination} from "../globalComponents/Pagination";

export const Users = () => {
  const crumbs = [{name: 'Users statistics', link: USERS_PAGE_ROUTER}];

  return (
    <section className={classNames('container')}>
      <BreadCrumbs crumbs={crumbs}/>
      <h2 className={styles.title}>Users statistics</h2>

      <UsersTable />

      <Pagination />
    </section>
  )
};
