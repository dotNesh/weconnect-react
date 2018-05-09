import React from 'react';
import { Link } from 'react-router-dom';
import CatalogSearch from '../CatalogSearch';
import CatalogPagination from '../CatalogPagination';

const CatalogList = () => (
    <div className="list-group">
        <div className="row">
            <div className="col-sm-4 sidenav">
                <CatalogSearch />
            </div>
            <div className="col-sm-8">
                <div className = "row">
                    <div className="col-sm-4">
                        <Link to="/businessprofile" className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between">
                                <h5>Mama Omosh Salon</h5>
                                <small>5 days ago</small>
                            </div>
                            <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>Owned by Mary Orwa</small>
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between">
                                <h5>Nina Consultants</h5>
                                <small>8 days ago</small>
                            </div>
                            <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>Owned by Muthiora Shinina</small>
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <Link to="/businessprofile" className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between">
                                <h5>Mama Omosh Salon</h5>
                                <small>5 days ago</small>
                            </div>
                            <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>Owned by Mary Orwa</small>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <Link to="/businessprofile" className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between">
                                <h5>Mama Omosh Salon</h5>
                                <small>5 days ago</small>
                            </div>
                            <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>Owned by Mary Orwa</small>
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between">
                                <h5>Nina Consultants</h5>
                                <small>8 days ago</small>
                            </div>
                            <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>Owned by Muthiora Shinina</small>
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <Link to="/businessprofile" className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between">
                                <h5>Mama Omosh Salon</h5>
                                <small>5 days ago</small>
                            </div>
                            <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>Owned by Mary Orwa</small>
                        </Link>
                    </div>
                </div>
                < div className="row">
                    <div className="col-sm-6">
                        <CatalogPagination />
                    </div>
                </div>
            </div>
        </div>
    </div>


);

export default CatalogList;
