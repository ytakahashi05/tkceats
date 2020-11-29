import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "category" */
export type Category = {
  __typename?: 'category';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
  __typename?: 'category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  __typename?: 'category_aggregate_fields';
  avg?: Maybe<Category_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
  stddev?: Maybe<Category_Stddev_Fields>;
  stddev_pop?: Maybe<Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Category_Stddev_Samp_Fields>;
  sum?: Maybe<Category_Sum_Fields>;
  var_pop?: Maybe<Category_Var_Pop_Fields>;
  var_samp?: Maybe<Category_Var_Samp_Fields>;
  variance?: Maybe<Category_Variance_Fields>;
};


/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "category" */
export type Category_Aggregate_Order_By = {
  avg?: Maybe<Category_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Category_Max_Order_By>;
  min?: Maybe<Category_Min_Order_By>;
  stddev?: Maybe<Category_Stddev_Order_By>;
  stddev_pop?: Maybe<Category_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Category_Stddev_Samp_Order_By>;
  sum?: Maybe<Category_Sum_Order_By>;
  var_pop?: Maybe<Category_Var_Pop_Order_By>;
  var_samp?: Maybe<Category_Var_Samp_Order_By>;
  variance?: Maybe<Category_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "category" */
export type Category_Arr_Rel_Insert_Input = {
  data: Array<Category_Insert_Input>;
  on_conflict?: Maybe<Category_On_Conflict>;
};

/** aggregate avg on columns */
export type Category_Avg_Fields = {
  __typename?: 'category_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "category" */
export type Category_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Category_Bool_Exp>>>;
  _not?: Maybe<Category_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Category_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint */
  CategoryPkey = 'category_pkey'
}

/** input type for incrementing integer column in table "category" */
export type Category_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'category_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "category" */
export type Category_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'category_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "category" */
export type Category_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
  __typename?: 'category_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  on_conflict?: Maybe<Category_On_Conflict>;
};

/** on conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns: Array<Category_Update_Column>;
  where?: Maybe<Category_Bool_Exp>;
};

/** ordering options when selecting data from "category" */
export type Category_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "category" */
export type Category_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Category_Stddev_Fields = {
  __typename?: 'category_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "category" */
export type Category_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Category_Stddev_Pop_Fields = {
  __typename?: 'category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "category" */
export type Category_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Category_Stddev_Samp_Fields = {
  __typename?: 'category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "category" */
export type Category_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Category_Sum_Fields = {
  __typename?: 'category_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "category" */
export type Category_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Category_Var_Pop_Fields = {
  __typename?: 'category_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "category" */
export type Category_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Category_Var_Samp_Fields = {
  __typename?: 'category_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "category" */
export type Category_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Category_Variance_Fields = {
  __typename?: 'category_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "category" */
export type Category_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "foods" */
export type Foods = {
  __typename?: 'foods';
  /** An object relationship */
  category?: Maybe<Category>;
  category_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  price?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "foods" */
export type Foods_Aggregate = {
  __typename?: 'foods_aggregate';
  aggregate?: Maybe<Foods_Aggregate_Fields>;
  nodes: Array<Foods>;
};

/** aggregate fields of "foods" */
export type Foods_Aggregate_Fields = {
  __typename?: 'foods_aggregate_fields';
  avg?: Maybe<Foods_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Foods_Max_Fields>;
  min?: Maybe<Foods_Min_Fields>;
  stddev?: Maybe<Foods_Stddev_Fields>;
  stddev_pop?: Maybe<Foods_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Foods_Stddev_Samp_Fields>;
  sum?: Maybe<Foods_Sum_Fields>;
  var_pop?: Maybe<Foods_Var_Pop_Fields>;
  var_samp?: Maybe<Foods_Var_Samp_Fields>;
  variance?: Maybe<Foods_Variance_Fields>;
};


/** aggregate fields of "foods" */
export type Foods_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Foods_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "foods" */
export type Foods_Aggregate_Order_By = {
  avg?: Maybe<Foods_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Foods_Max_Order_By>;
  min?: Maybe<Foods_Min_Order_By>;
  stddev?: Maybe<Foods_Stddev_Order_By>;
  stddev_pop?: Maybe<Foods_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Foods_Stddev_Samp_Order_By>;
  sum?: Maybe<Foods_Sum_Order_By>;
  var_pop?: Maybe<Foods_Var_Pop_Order_By>;
  var_samp?: Maybe<Foods_Var_Samp_Order_By>;
  variance?: Maybe<Foods_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "foods" */
export type Foods_Arr_Rel_Insert_Input = {
  data: Array<Foods_Insert_Input>;
  on_conflict?: Maybe<Foods_On_Conflict>;
};

/** aggregate avg on columns */
export type Foods_Avg_Fields = {
  __typename?: 'foods_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "foods" */
export type Foods_Avg_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "foods". All fields are combined with a logical 'AND'. */
export type Foods_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Foods_Bool_Exp>>>;
  _not?: Maybe<Foods_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Foods_Bool_Exp>>>;
  category?: Maybe<Category_Bool_Exp>;
  category_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "foods" */
export enum Foods_Constraint {
  /** unique or primary key constraint */
  FoodsPkey = 'foods_pkey'
}

/** input type for incrementing integer column in table "foods" */
export type Foods_Inc_Input = {
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "foods" */
export type Foods_Insert_Input = {
  category?: Maybe<Category_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Foods_Max_Fields = {
  __typename?: 'foods_max_fields';
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "foods" */
export type Foods_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Foods_Min_Fields = {
  __typename?: 'foods_min_fields';
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "foods" */
export type Foods_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** response of any mutation on the table "foods" */
export type Foods_Mutation_Response = {
  __typename?: 'foods_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Foods>;
};

/** input type for inserting object relation for remote table "foods" */
export type Foods_Obj_Rel_Insert_Input = {
  data: Foods_Insert_Input;
  on_conflict?: Maybe<Foods_On_Conflict>;
};

/** on conflict condition type for table "foods" */
export type Foods_On_Conflict = {
  constraint: Foods_Constraint;
  update_columns: Array<Foods_Update_Column>;
  where?: Maybe<Foods_Bool_Exp>;
};

/** ordering options when selecting data from "foods" */
export type Foods_Order_By = {
  category?: Maybe<Category_Order_By>;
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** primary key columns input for table: "foods" */
export type Foods_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "foods" */
export enum Foods_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price'
}

/** input type for updating data in table "foods" */
export type Foods_Set_Input = {
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Foods_Stddev_Fields = {
  __typename?: 'foods_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "foods" */
export type Foods_Stddev_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Foods_Stddev_Pop_Fields = {
  __typename?: 'foods_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "foods" */
export type Foods_Stddev_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Foods_Stddev_Samp_Fields = {
  __typename?: 'foods_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "foods" */
export type Foods_Stddev_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Foods_Sum_Fields = {
  __typename?: 'foods_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "foods" */
export type Foods_Sum_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** update columns of table "foods" */
export enum Foods_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price'
}

/** aggregate var_pop on columns */
export type Foods_Var_Pop_Fields = {
  __typename?: 'foods_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "foods" */
export type Foods_Var_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Foods_Var_Samp_Fields = {
  __typename?: 'foods_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "foods" */
export type Foods_Var_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Foods_Variance_Fields = {
  __typename?: 'foods_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "foods" */
export type Foods_Variance_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "category" */
  delete_category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "category" */
  delete_category_by_pk?: Maybe<Category>;
  /** delete data from the table: "foods" */
  delete_foods?: Maybe<Foods_Mutation_Response>;
  /** delete single row from the table: "foods" */
  delete_foods_by_pk?: Maybe<Foods>;
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "category" */
  insert_category_one?: Maybe<Category>;
  /** insert data into the table: "foods" */
  insert_foods?: Maybe<Foods_Mutation_Response>;
  /** insert a single row into the table: "foods" */
  insert_foods_one?: Maybe<Foods>;
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "category" */
  update_category_by_pk?: Maybe<Category>;
  /** update data of the table: "foods" */
  update_foods?: Maybe<Foods_Mutation_Response>;
  /** update single row of the table: "foods" */
  update_foods_by_pk?: Maybe<Foods>;
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_FoodsArgs = {
  where: Foods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Foods_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: Maybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: Maybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FoodsArgs = {
  objects: Array<Foods_Insert_Input>;
  on_conflict?: Maybe<Foods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Foods_OneArgs = {
  object: Foods_Insert_Input;
  on_conflict?: Maybe<Foods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _inc?: Maybe<Category_Inc_Input>;
  _set?: Maybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _inc?: Maybe<Category_Inc_Input>;
  _set?: Maybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FoodsArgs = {
  _inc?: Maybe<Foods_Inc_Input>;
  _set?: Maybe<Foods_Set_Input>;
  where: Foods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Foods_By_PkArgs = {
  _inc?: Maybe<Foods_Inc_Input>;
  _set?: Maybe<Foods_Set_Input>;
  pk_columns: Foods_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "foods" */
  foods: Array<Foods>;
  /** fetch aggregated fields from the table: "foods" */
  foods_aggregate: Foods_Aggregate;
  /** fetch data from the table: "foods" using primary key columns */
  foods_by_pk?: Maybe<Foods>;
};


/** query root */
export type Query_RootCategoryArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};


/** query root */
export type Query_RootCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};


/** query root */
export type Query_RootCategory_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootFoodsArgs = {
  distinct_on?: Maybe<Array<Foods_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Foods_Order_By>>;
  where?: Maybe<Foods_Bool_Exp>;
};


/** query root */
export type Query_RootFoods_AggregateArgs = {
  distinct_on?: Maybe<Array<Foods_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Foods_Order_By>>;
  where?: Maybe<Foods_Bool_Exp>;
};


/** query root */
export type Query_RootFoods_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "foods" */
  foods: Array<Foods>;
  /** fetch aggregated fields from the table: "foods" */
  foods_aggregate: Foods_Aggregate;
  /** fetch data from the table: "foods" using primary key columns */
  foods_by_pk?: Maybe<Foods>;
};


/** subscription root */
export type Subscription_RootCategoryArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootFoodsArgs = {
  distinct_on?: Maybe<Array<Foods_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Foods_Order_By>>;
  where?: Maybe<Foods_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFoods_AggregateArgs = {
  distinct_on?: Maybe<Array<Foods_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Foods_Order_By>>;
  where?: Maybe<Foods_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFoods_By_PkArgs = {
  id: Scalars['Int'];
};

export type FoodCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type FoodCategoryQuery = (
  { __typename?: 'query_root' }
  & { category: Array<(
    { __typename?: 'category' }
    & Pick<Category, 'id' | 'name'>
  )> }
);

export type FoodDetailQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type FoodDetailQuery = (
  { __typename?: 'query_root' }
  & { foods: Array<(
    { __typename?: 'foods' }
    & Pick<Foods, 'name' | 'price'>
  )> }
);

export type FoodListQueryVariables = Exact<{
  categoryId?: Maybe<Scalars['Int']>;
}>;


export type FoodListQuery = (
  { __typename?: 'query_root' }
  & { foods: Array<(
    { __typename?: 'foods' }
    & Pick<Foods, 'id' | 'name' | 'price'>
    & { category?: Maybe<(
      { __typename?: 'category' }
      & Pick<Category, 'id' | 'name'>
    )> }
  )> }
);


export const FoodCategoryDocument = gql`
    query FoodCategory {
  category {
    id
    name
  }
}
    `;

/**
 * __useFoodCategoryQuery__
 *
 * To run a query within a React component, call `useFoodCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoodCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoodCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useFoodCategoryQuery(baseOptions?: Apollo.QueryHookOptions<FoodCategoryQuery, FoodCategoryQueryVariables>) {
        return Apollo.useQuery<FoodCategoryQuery, FoodCategoryQueryVariables>(FoodCategoryDocument, baseOptions);
      }
export function useFoodCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoodCategoryQuery, FoodCategoryQueryVariables>) {
          return Apollo.useLazyQuery<FoodCategoryQuery, FoodCategoryQueryVariables>(FoodCategoryDocument, baseOptions);
        }
export type FoodCategoryQueryHookResult = ReturnType<typeof useFoodCategoryQuery>;
export type FoodCategoryLazyQueryHookResult = ReturnType<typeof useFoodCategoryLazyQuery>;
export type FoodCategoryQueryResult = Apollo.QueryResult<FoodCategoryQuery, FoodCategoryQueryVariables>;
export const FoodDetailDocument = gql`
    query FoodDetail($id: Int) {
  foods(where: {id: {_eq: $id}}) {
    name
    price
  }
}
    `;

/**
 * __useFoodDetailQuery__
 *
 * To run a query within a React component, call `useFoodDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoodDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoodDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFoodDetailQuery(baseOptions?: Apollo.QueryHookOptions<FoodDetailQuery, FoodDetailQueryVariables>) {
        return Apollo.useQuery<FoodDetailQuery, FoodDetailQueryVariables>(FoodDetailDocument, baseOptions);
      }
export function useFoodDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoodDetailQuery, FoodDetailQueryVariables>) {
          return Apollo.useLazyQuery<FoodDetailQuery, FoodDetailQueryVariables>(FoodDetailDocument, baseOptions);
        }
export type FoodDetailQueryHookResult = ReturnType<typeof useFoodDetailQuery>;
export type FoodDetailLazyQueryHookResult = ReturnType<typeof useFoodDetailLazyQuery>;
export type FoodDetailQueryResult = Apollo.QueryResult<FoodDetailQuery, FoodDetailQueryVariables>;
export const FoodListDocument = gql`
    query FoodList($categoryId: Int) {
  foods(where: {category_id: {_eq: $categoryId}}) {
    id
    name
    price
    category {
      id
      name
    }
  }
}
    `;

/**
 * __useFoodListQuery__
 *
 * To run a query within a React component, call `useFoodListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoodListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoodListQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useFoodListQuery(baseOptions?: Apollo.QueryHookOptions<FoodListQuery, FoodListQueryVariables>) {
        return Apollo.useQuery<FoodListQuery, FoodListQueryVariables>(FoodListDocument, baseOptions);
      }
export function useFoodListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoodListQuery, FoodListQueryVariables>) {
          return Apollo.useLazyQuery<FoodListQuery, FoodListQueryVariables>(FoodListDocument, baseOptions);
        }
export type FoodListQueryHookResult = ReturnType<typeof useFoodListQuery>;
export type FoodListLazyQueryHookResult = ReturnType<typeof useFoodListLazyQuery>;
export type FoodListQueryResult = Apollo.QueryResult<FoodListQuery, FoodListQueryVariables>;