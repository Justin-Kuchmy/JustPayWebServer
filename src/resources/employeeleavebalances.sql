CREATE TABLE IF NOT EXISTS employee_leave_balance (
    employee_id TEXT,
    year INTEGER,
    total_leave_earned REAL,
    leave_used REAL,
    PRIMARY KEY (employee_id, year)
);

