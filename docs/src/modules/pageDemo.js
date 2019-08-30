'use strict';

import {
    Dropdown,
    Header,
    Icon,
    Page,
    TitleBar,
} from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

class PageDemo extends React.Component {
    constructor() {
        super();

        this._defaultFilters = {
            multiSelectValue: [],
            nestedTogglesBarValue: [],
            nestedTogglesFooValue: [],
            sort: {
                label: 'Name (Ascending)',
                value: 'Name (Ascending)',
            },
        };

        this.state = {
            appliedFilters: _.cloneDeep(this._defaultFilters),
            dirtyFilters: _.cloneDeep(this._defaultFilters),
            isFiltersDrawerOpen: false,
        };

        this._onApplyFiltersDrawerClick = this._onApplyFiltersDrawerClick.bind(this);
        this._onClearFiltersDrawerClick = this._onClearFiltersDrawerClick.bind(this);
        this._onFiltersToggle = this._onFiltersToggle.bind(this);
        this._onKeywordsMultiSelectChange = this._onKeywordsMultiSelectChange.bind(this);
        this._onNestedTogglesBarChange = this._onNestedTogglesBarChange.bind(this);
        this._onNestedTogglesFooChange = this._onNestedTogglesFooChange.bind(this);
        this._onSortDropdownChange = this._onSortDropdownChange.bind(this);
    }

    render() {
        const {
            appliedFilters,
            dirtyFilters,
            isFiltersDrawerOpen,
        } = this.state;
        const isDirty = !_.isEqual(appliedFilters, dirtyFilters);
        const isFiltering = !_.isEqual(this._defaultFilters, appliedFilters);
        const isMobile = 700;

        return (
            <React.Fragment>
                <div>
                    <div className="hidden-spacer" />

                    <TitleBar title="Page Components Demo" />
                </div>

                <Page
                    className="page-class-name"
                    style={{
                        minHeight: 'calc(100vh - 140px)',
                    }}
                >
                    <Page.ActionBar>
                        <Icon
                            onClick={this._onFiltersToggle}
                            type="filter"
                        />
                    </Page.ActionBar>

                    <Page.Container>
                        <Page.FiltersDrawer
                            isDirty={isDirty}
                            isFiltering={isFiltering}
                            isOpen={isFiltersDrawerOpen}
                            onApply={this._onApplyFiltersDrawerClick}
                            onClear={this._onClearFiltersDrawerClick}
                            onClose={this._onFiltersToggle}
                            rows={[
                                {
                                    header: 'Keywords',
                                    items: [
                                        {
                                            multiSelect: {
                                                placeholder: 'Add Keyword',
                                                onChange: this._onKeywordsMultiSelectChange,
                                                options: [
                                                    {
                                                        label: 'Foo',
                                                        value: 1,
                                                    }, {
                                                        label: 'Bar',
                                                        value: 2,
                                                    }, {
                                                        label: 'Baz',
                                                        value: 3,
                                                    }, {
                                                        label: 'Qux',
                                                        value: 4,
                                                    },
                                                ],
                                                value: dirtyFilters.multiSelectValue,
                                            },
                                        },
                                    ],
                                }, {
                                    header: 'Sort',
                                    items: [
                                        {
                                            dropdown: {
                                                onChange: this._onSortDropdownChange,
                                                options: [
                                                    {
                                                        label: 'Name (Ascending)',
                                                        value: 'Name (Ascending)',
                                                    }, {
                                                        label: 'Name (Descending)',
                                                        value: 'Name (Descending)',
                                                    }, {
                                                        label: 'Create Date (Ascending)',
                                                        value: 'Create Date (Ascending)',
                                                    }, {
                                                        label: 'Create Date (Descending)',
                                                        value: 'Create Date (Descending)',
                                                    },
                                                ],
                                                value: dirtyFilters.sort,
                                            },
                                        },
                                    ],
                                }, {
                                    header: 'Filters',
                                    items: [
                                        {
                                            nestedToggles: {
                                                label: 'Foo Filters',
                                                onChange: this._onNestedTogglesFooChange,
                                                options: [
                                                    {
                                                        label: 'Foo',
                                                        value: 1,
                                                    }, {
                                                        label: 'Bar',
                                                        value: 2,
                                                    }, {
                                                        label: 'Baz',
                                                        value: 3,
                                                    }, {
                                                        label: 'Qux',
                                                        value: 4,
                                                    },
                                                ],
                                                value: dirtyFilters.nestedTogglesFooValue,
                                            },
                                        }, {
                                            nestedToggles: {
                                                label: 'Bar Filters',
                                                onChange: this._onNestedTogglesBarChange,
                                                options: [
                                                    {
                                                        label: 'Bar',
                                                        value: 1,
                                                    }, {
                                                        label: 'Baz',
                                                        value: 2,
                                                    }, {
                                                        label: 'Qux',
                                                        value: 3,
                                                    },
                                                ],
                                                value: dirtyFilters.nestedTogglesBarValue,
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />

                        <Page.FiltersRail
                            isOpen={isFiltersDrawerOpen}
                            onClose={this._onFiltersToggle}
                        >
                            <Header weight="bold">Sort By</Header>

                            <Dropdown
                                clearable={false}
                                options={[
                                    {
                                        label: 'Name (Ascending)',
                                        value: 'Name (Ascending)',
                                    }, {
                                        label: 'Name (Descending)',
                                        value: 'Name (Descending)',
                                    }, {
                                        label: 'Create Date (Ascending)',
                                        value: 'Create Date (Ascending)',
                                    }, {
                                        label: 'Create Date (Descending)',
                                        value: 'Create Date (Descending)',
                                    },
                                ]}
                                searchable={false}
                                selection
                                selectionUnderline
                                value={{
                                    label: 'Name (Ascending)',
                                    value: 'Name (Ascending)',
                                }}
                            />

                            <Header weight="bold">Campus</Header>

                            <Dropdown
                                clearable={false}
                                options={[
                                    {
                                        label: 'All Campuses',
                                        value: 'All Campuses',
                                    }, {
                                        label: 'Lake Forest',
                                        value: 'Lake Forest',
                                    },
                                ]}
                                searchable={false}
                                selection
                                selectionUnderline
                                value={{
                                    label: 'All Campuses',
                                    value: 'All Campuses',
                                }}
                            />
                        </Page.FiltersRail>

                        <Page.Content
                            className="page-content-class-name"
                            isFiltersRailOpen={isFiltersDrawerOpen}
                        >
                            <Page.Details
                                color={11}
                                columns={[
                                    {
                                        accessor: () => {
                                            return 'Super Cool Info Bar - Color: 11';
                                        },
                                        fontSize: 'large',
                                        fontWeight: 'semibold',
                                        header: null,
                                        style: {
                                            marginBottom: '11px',
                                        },
                                        width: '100%',
                                    }, {
                                        accessor: d => {
                                            return (
                                                <div>Chart</div>
                                            );
                                        },
                                        fontWeight: 'bold',
                                        header: null,
                                    }, {
                                        accessor: 'activeTemplates',
                                        header: 'Active Templates',
                                    }, {
                                        accessor: 'inactiveTemplates',
                                        header: 'Inactive Templates',
                                    }, {
                                        columns: [
                                            {
                                                accessor: 'activeTemplates',
                                                header: 'Active Templates',
                                            }, {
                                                accessor: 'inactiveTemplates',
                                                header: 'Inactive Templates',
                                            },
                                        ],
                                        divide: true,
                                    },
                                ]}
                                data={{
                                    activeTemplates: 4,
                                    id: 1,
                                    inactiveTemplates: 2,
                                }}
                            />

                            {!isMobile && viewType === 'table' ? (
                                <Page.Table
                                    columns={[
                                        {
                                            accessor: 'name',
                                            header: 'Names',
                                        }, {
                                            accessor: 'campus',
                                            header: 'Campus',
                                        }, {
                                            accessor: d => {
                                                return moment.unix(d.createdOn).utc().format('L');
                                            },
                                            header: 'Created On',
                                        }, {
                                            accessor: () => <Icon compact size="xxsmall" type="chevron-right" />,
                                            header: null,
                                            textAlign: 'right',
                                        },
                                    ]}
                                    data={[
                                        {
                                            campus: 'Lake Forest',
                                            createdOn: 1259668810,
                                            id: 1,
                                            name: 'First Time Visitor',
                                        }, {
                                            campus: 'Lake Forest',
                                            createdOn: 1159668810,
                                            id: 2,
                                            name: 'Second Time Visitor',
                                        }, {
                                            campus: 'Anaheim',
                                            createdOn: 1152668810,
                                            id: 3,
                                            name: 'Class 101 Invite',
                                        },
                                    ]}
                                    rowProps={() => {
                                        return {
                                            onClick: this._onTableRowClick,
                                        };
                                    }}
                                />
                            ) : (
                                <Page.Grid
                                    cardProps={() => {
                                        return {
                                            onClick: this._onCardClick,
                                        };
                                    }}
                                    columns={[
                                        {
                                            accessor: 'name',
                                            fontSize: 'medium',
                                            fontWeight: 'semibold',
                                            header: false,
                                            width: '100%',
                                        }, {
                                            accessor: 'campus',
                                            fontWeight: 'bold',
                                            header: 'Campus',
                                        }, {
                                            accessor: d => {
                                                return moment.unix(d.createdOn).utc().format('L');
                                            },
                                            fontWeight: 'bold',
                                            header: 'Created On',
                                        },
                                    ]}
                                    data={[
                                        {
                                            campus: 'Lake Forest',
                                            createdOn: 1259668810,
                                            id: 1,
                                            name: 'First Time Visitor',
                                        }, {
                                            campus: 'Lake Forest',
                                            createdOn: 1159668810,
                                            id: 2,
                                            name: 'Second Time Visitor',
                                        }, {
                                            campus: 'Anaheim',
                                            createdOn: 1152668810,
                                            id: 3,
                                            name: 'Class 101 Invite',
                                        },
                                    ]}
                                />
                            )}
                        </Page.Content>
                    </Page.Container>
                </Page>
            </React.Fragment>
        );
    }

    _onApplyFiltersDrawerClick() {
        const { dirtyFilters } = this.state;

        this.setState({
            appliedFilters: _.cloneDeep(dirtyFilters),
            isFiltersDrawerOpen: false,
            isFiltering: true,
        });
    }

    _onClearFiltersDrawerClick() {
        this.setState({
            dirtyFilters: _.cloneDeep(this._defaultFilters),
            isFiltering: false,
        });
    }

    _onFiltersToggle() {
        const { isFiltersDrawerOpen } = this.state;

        this.setState({
            isFiltersDrawerOpen: !isFiltersDrawerOpen,
        });
    }

    _onKeywordsMultiSelectChange(selectedOptions) {
        const { dirtyFilters } = this.state;

        this.setState({
            dirtyFilters: _.cloneDeep({ ...dirtyFilters, multiSelectValue: selectedOptions }),
        });
    }

    _onNestedTogglesBarChange(selectedOptions) {
        const { dirtyFilters } = this.state;

        this.setState({
            dirtyFilters: _.cloneDeep({ ...dirtyFilters, nestedTogglesBarValue: selectedOptions }),
        });
    }

    _onNestedTogglesFooChange(selectedOptions) {
        const { dirtyFilters } = this.state;

        this.setState({
            dirtyFilters: _.cloneDeep({ ...dirtyFilters, nestedTogglesFooValue: selectedOptions }),
        });
    }

    _onSortDropdownChange(selectedOption) {
        const { dirtyFilters } = this.state;

        this.setState({
            dirtyFilters: _.cloneDeep({ ...dirtyFilters, sort: selectedOption }),
        });
    }
}

export default PageDemo;
