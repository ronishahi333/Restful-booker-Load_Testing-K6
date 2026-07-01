import { Rate, Trend, Counter } from 'k6/metrics'

export const loginSuccessRate = new Rate('login_success_rate');

export const loginDuration = new Trend('login_duration_ms');
export const bookingCreation = new Trend('booking_creation')

export const createBookingCount = new Counter('booking_count')
