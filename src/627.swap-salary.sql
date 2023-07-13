-- # Write your MySQL query statement below
update salary set sex = if(sex = 'm','f','m')

-- 请你编写一个 SQL 查询来交换所有的 'f' 和 'm' （即，将所有 'f' 变为 'm' ，反之亦然），仅使用 单个 update 语句 ，且不产生中间临时表。

-- 注意，你必须仅使用一条 update 语句，且 不能 使用 select 语句。
