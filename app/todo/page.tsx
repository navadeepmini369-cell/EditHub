'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Trash2,
  Edit2,
  Check,
  Search,
  Calendar,
  Flag,
  Folder,
  TrendingUp,
  CheckCircle2,
  Circle,
  Filter,
} from 'lucide-react';

interface Todo {
  id: string;
  title: string;
  description: string;
  category: 'work' | 'personal' | 'shopping' | 'health' | 'learning';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  completed: boolean;
  createdAt: string;
}

const categories = [
  { name: 'work', icon: '💼', color: 'from-blue-500 to-blue-600' },
  { name: 'personal', icon: '👤', color: 'from-purple-500 to-purple-600' },
  { name: 'shopping', icon: '🛍️', color: 'from-pink-500 to-pink-600' },
  { name: 'health', icon: '❤️', color: 'from-red-500 to-red-600' },
  { name: 'learning', icon: '📚', color: 'from-yellow-500 to-yellow-600' },
];

const priorityColors = {
  low: 'text-green-400',
  medium: 'text-yellow-400',
  high: 'text-red-400',
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Todo['category']>('work');
  const [priority, setPriority] = useState<Todo['priority']>('medium');
  const [dueDate, setDueDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'completed'>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Load todos from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('edithub_todos');
    if (saved) {
      try {
        setTodos(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load todos:', e);
      }
    }
    setLoading(false);
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem('edithub_todos', JSON.stringify(todos));
  }, [todos]);

  // Filter and search todos
  useEffect(() => {
    let filtered = todos;

    // Filter by status
    if (filterStatus === 'active') {
      filtered = filtered.filter((t) => !t.completed);
    } else if (filterStatus === 'completed') {
      filtered = filtered.filter((t) => t.completed);
    }

    // Filter by category
    if (filterCategory !== 'all') {
      filtered = filtered.filter((t) => t.category === filterCategory);
    }

    // Search
    if (searchTerm) {
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTodos(filtered);
  }, [todos, filterStatus, filterCategory, searchTerm]);

  const addTodo = () => {
    if (!title.trim()) return;

    if (editingId) {
      setTodos(
        todos.map((t) =>
          t.id === editingId
            ? {
                ...t,
                title,
                description,
                category,
                priority,
                dueDate,
              }
            : t
        )
      );
      setEditingId(null);
    } else {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title,
        description,
        category,
        priority,
        dueDate,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTodos([newTodo, ...todos]);
    }

    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const editTodo = (todo: Todo) => {
    setTitle(todo.title);
    setDescription(todo.description);
    setCategory(todo.category);
    setPriority(todo.priority);
    setDueDate(todo.dueDate);
    setEditingId(todo.id);
  };

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
    completionRate: todos.length === 0 ? 0 : Math.round((todos.filter((t) => t.completed).length / todos.length) * 100),
  };

  const categoryIcon = categories.find((c) => c.name === category)?.icon || '📋';

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <TrendingUp className="w-12 h-12 text-primary" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark text-white">
      {/* Animated Background */}
      <motion.div
        className="fixed top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="fixed bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold gradient-text mb-2">📋 Todo Master</h1>
          <p className="text-primary/60">Stay organized and productive</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Add Todo Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="glass-dark rounded-2xl p-6 space-y-4 sticky top-8">
              <h2 className="text-xl font-bold mb-6">
                {editingId ? '✏️ Edit Todo' : '➕ Add Todo'}
              </h2>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="What to do?"
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-3 py-2 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Add details..."
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-3 py-2 focus:outline-none focus:border-primary transition-colors text-sm h-20 resize-none"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <div className="grid grid-cols-5 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setCategory(cat.name as Todo['category'])}
                      className={`py-2 rounded-lg text-lg transition-all ${
                        category === cat.name
                          ? 'ring-2 ring-primary scale-110'
                          : 'hover:scale-105'
                      }`}
                      title={cat.name}
                    >
                      {cat.icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-medium mb-2">Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as Todo['priority'])}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-3 py-2 focus:outline-none focus:border-primary transition-colors text-sm"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              {/* Due Date */}
              <div>
                <label className="block text-sm font-medium mb-2">Due Date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-3 py-2 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              {/* Add Button */}
              <motion.button
                onClick={addTodo}
                disabled={!title.trim()}
                className="w-full py-2 rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all font-bold text-dark disabled:opacity-50 flex items-center justify-center space-x-2 mt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Plus size={18} />
                <span>{editingId ? 'Update' : 'Add'}</span>
              </motion.button>

              {editingId && (
                <motion.button
                  onClick={() => {
                    setEditingId(null);
                    setTitle('');
                    setDescription('');
                    setDueDate('');
                  }}
                  className="w-full py-2 rounded-lg glass hover:bg-primary/10 transition-all font-medium text-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  Cancel
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {[
                { label: 'Total', value: stats.total, icon: '📊' },
                { label: 'Active', value: stats.active, icon: '⚡' },
                { label: 'Completed', value: stats.completed, icon: '✅' },
                { label: 'Progress', value: `${stats.completionRate}%`, icon: '📈' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <span className="text-2xl block mb-2">{stat.icon}</span>
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-primary/60 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl p-4 space-y-4"
            >
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/60 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search todos..."
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {/* Status Filter */}
                <div className="flex gap-2">
                  {(['all', 'active', 'completed'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilterStatus(status)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                        filterStatus === status
                          ? 'bg-gradient-to-r from-primary to-secondary text-dark'
                          : 'glass hover:border-primary/50'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Category Filter */}
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-3 py-1 rounded-lg text-sm font-medium bg-dark/50 border border-primary/20 focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="all">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat.name} value={cat.name}>
                      {cat.icon} {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            {/* Todos List */}
            <motion.div
              className="space-y-3 max-h-96 overflow-y-auto pr-2"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {filteredTodos.length > 0 ? (
                  filteredTodos.map((todo) => {
                    const catIcon = categories.find((c) => c.name === todo.category)?.icon || '📋';
                    return (
                      <motion.div
                        key={todo.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="glass p-4 rounded-xl hover:border-primary/50 transition-all group"
                      >
                        <div className="flex items-start space-x-3">
                          {/* Checkbox */}
                          <motion.button
                            onClick={() => toggleComplete(todo.id)}
                            className="mt-1 flex-shrink-0 focus:outline-none"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {todo.completed ? (
                              <CheckCircle2 className="w-6 h-6 text-primary" />
                            ) : (
                              <Circle className="w-6 h-6 text-primary/40 hover:text-primary" />
                            )}
                          </motion.button>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`font-bold truncate ${
                                todo.completed ? 'line-through text-primary/50' : ''
                              }`}
                            >
                              {todo.title}
                            </h3>
                            {todo.description && (
                              <p className="text-sm text-primary/60 truncate">
                                {todo.description}
                              </p>
                            )}

                            {/* Meta */}
                            <div className="flex flex-wrap gap-2 mt-2 text-xs">
                              <span className="text-lg">{catIcon}</span>
                              <span className={`flex items-center space-x-1 ${priorityColors[todo.priority]}`}>
                                <Flag size={12} />
                                <span>{todo.priority}</span>
                              </span>
                              {todo.dueDate && (
                                <span className="flex items-center space-x-1 text-blue-400">
                                  <Calendar size={12} />
                                  <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                            <motion.button
                              onClick={() => editTodo(todo)}
                              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Edit2 size={16} className="text-primary" />
                            </motion.button>
                            <motion.button
                              onClick={() => deleteTodo(todo.id)}
                              className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 size={16} className="text-accent" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="text-5xl mb-4">🎉</div>
                    <p className="text-primary/60 mb-2">No todos found</p>
                    <p className="text-sm text-primary/40">
                      {searchTerm || filterCategory !== 'all'
                        ? 'Try adjusting your filters'
                        : 'Add your first todo to get started!'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
