WITH variables (measure_name) as (values('Surinkimas')),

-- Use 6h aggregate for intervals greater than 14 days
SELECT
	time_bucket('6 hour', time) as time,
	name,
	max(power) as power
FROM moment_power mp, variables
WHERE $__timeTo()::timestamp - $__timeFrom()::timestamp > '14 days'::interval AND $__timeFilter(time)
AND name = measure_name
GROUP BY time_bucket('6 hour', time), name
UNION ALL

-- Use hourly aggregate for intervals between 3 and 14 days
SELECT
	time_bucket('1 hour', time) as time,
	name,
	max(power) as power
FROM moment_power mp, variables
WHERE $__timeTo()::timestamp - $__timeFrom()::timestamp BETWEEN '3 days'::interval AND '14 days'::interval AND $__timeFilter(time)
AND name = measure_name
GROUP BY time_bucket('1 hour', time), name
UNION ALL

-- use minute aggregate for intervals under 3 days
SELECT
	time_bucket('1 min', time) as time,
	name,
	max(power) as power
FROM moment_power mp, variables
WHERE $__timeTo()::timestamp - $__timeFrom()::timestamp BETWEEN '1 day'::interval AND '3 days'::interval AND $__timeFilter(time)
AND name = measure_name
GROUP BY time_bucket('1 min', time), name
UNION ALL

-- use 5 second buckets for intervals shorter than a day
SELECT
	time_bucket('5 seconds', time) as time,
	name,
	max(power)
FROM moment_power mp, variables
WHERE $__timeTo()::timestamp - $__timeFrom()::timestamp < '1 day'::interval AND $__timeFilter(time)
AND name = measure_name
group by time_bucket('5 seconds', time), name