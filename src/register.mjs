export default async function register_user(req, res, db){
    const { username, email, password } = req.body;

  // 1. Basic input validation
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Please provide username, email, and password.' });
  }

  try {
    // 2. Check if username or email is already registered
    const userCheck = await db.query(
      'SELECT id FROM users WHERE email = $1 OR username = $2',
      [email, username]
    );

    if (userCheck.rows.length > 0) {
      return res.status(409).json({ error: 'Username or email already in use.' });
    }

    // 3. Insert user directly without hashing
    const newUser = await db.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email, created_at',
      [username, email, password]
    );

    // 4. Send back success response
    return res.status(201).json({
      message: 'User registered successfully',
      user: newUser.rows[0],
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}