import React from 'react';
import styles from './Users.module.scss';
import classNames from "classnames";
import {BreadCrumbs} from "../globalComponents/BreadCrumbs";
import {USERS_PAGE_ROUTER} from "../App/AppRoutes/routesConst";

export const Users = () => {
  const crumbs = [{name: 'Users statistics', link: USERS_PAGE_ROUTER}];

  return (
    <section className={classNames('container')}>
      <BreadCrumbs crumbs={crumbs}/>
      <h2 className={styles.title}>Users statistics</h2>

      <table>
        <thead>
          <tr>

          </tr>
        </thead>
      </table>
    </section>
  )
};
