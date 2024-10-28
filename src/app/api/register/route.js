<<<<<<< HEAD
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const data = await req.json();

  // Check if data is valid
  if (!data || !data.email || !data.password) {
    return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
  }

  // Define the path to the JSON file
  const filePath = path.join(process.cwd(), 'public', 'data', 'users.json');

  // Read existing data
  let existingData = [];
  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    existingData = JSON.parse(fileContents);
  }

  // Check for duplicate email
  const isEmailTaken = existingData.some(user => user.email === data.email);
  if (isEmailTaken) {
    return NextResponse.json({ message: 'Email is already taken.' }, { status: 409 });
  }

  // Add the new user data
  existingData.push(data);

  // Write back to the JSON file
  try {
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    return NextResponse.json({ message: 'User registered successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error writing to file:', error);
    return NextResponse.json({ message: 'Error saving data. Please try again.' }, { status: 500 });
  }
}
=======
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const data = await req.json();

  // Check if data is valid
  if (!data || !data.email || !data.password) {
    return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
  }

  // Define the path to the JSON file
  const filePath = path.join(process.cwd(), 'public', 'data', 'users.json');

  // Read existing data
  let existingData = [];
  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    existingData = JSON.parse(fileContents);
  }

  // Check for duplicate email
  const isEmailTaken = existingData.some(user => user.email === data.email);
  if (isEmailTaken) {
    return NextResponse.json({ message: 'Email is already taken.' }, { status: 409 });
  }

  // Add the new user data
  existingData.push(data);

  // Write back to the JSON file
  try {
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    return NextResponse.json({ message: 'User registered successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error writing to file:', error);
    return NextResponse.json({ message: 'Error saving data. Please try again.' }, { status: 500 });
  }
}
>>>>>>> ae0f5209876ac3b090ee5a5da48891123d83dce4
