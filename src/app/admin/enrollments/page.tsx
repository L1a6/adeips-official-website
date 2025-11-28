'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Enrollment {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  message?: string;
  status: 'pending' | 'contacted' | 'enrolled' | 'rejected';
  notes?: string;
  created_at: string;
}

export default function EnrollmentsPage() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const res = await fetch('/api/admin/enrollments');
      const data = await res.json();
      setEnrollments(data.enrollments || []);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: Enrollment['status']) => {
    try {
      await fetch('/api/admin/enrollments', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      fetchEnrollments();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteEnrollment = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enrollment?')) return;
    
    try {
      await fetch(`/api/admin/enrollments?id=${id}`, {
        method: 'DELETE',
      });
      fetchEnrollments();
    } catch (error) {
      console.error('Error deleting enrollment:', error);
    }
  };

  const filteredEnrollments = filter === 'all'
    ? enrollments
    : enrollments.filter(e => e.status === filter);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    contacted: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    enrolled: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    rejected: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A1236]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-outfit text-4xl font-light text-gray-900 dark:text-white">
            Enrollments
          </h1>
          <div className="flex gap-2">
            {['all', 'pending', 'contacted', 'enrolled', 'rejected'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === status
                    ? 'bg-[#0A1236] text-white dark:bg-white dark:text-[#0A1236]'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {filteredEnrollments.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
            <p className="text-gray-600 dark:text-gray-400">No enrollments found.</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredEnrollments.map((enrollment) => (
                    <tr key={enrollment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {enrollment.full_name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <div>{enrollment.email}</div>
                          <div>{enrollment.phone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 max-w-xs">
                        <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {enrollment.message || 'No message'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={enrollment.status}
                          onChange={(e) => updateStatus(enrollment.id, e.target.value as Enrollment['status'])}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[enrollment.status]} border-0 cursor-pointer`}
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="enrolled">Enrolled</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                        {new Date(enrollment.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => deleteEnrollment(enrollment.id)}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
