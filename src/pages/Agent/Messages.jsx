import React, { useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaPaperPlane,
  FaUser,
  FaPhone,
  FaVideo,
  FaEllipsisV,
  FaFile,
  FaImage,
  FaSmile,
  FaCheck,
  FaCheckDouble,
  FaClock,
  FaFilter,
  FaArchive,
  FaStar,
  FaBuilding,
} from "react-icons/fa";

// Mock data for conversations
const conversations = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    clientAvatar: "https://randomuser.me/api/portraits/women/1.jpg",
    lastMessage: "Thank you for the property details. When can we schedule a viewing?",
    timestamp: "2 min ago",
    unreadCount: 2,
    isOnline: true,
    propertyInterest: "Luxury Downtown Apartment",
    clientPhone: "+1 (555) 123-4567",
    messages: [
      {
        id: 1,
        senderId: "client",
        content: "Hi! I'm interested in the downtown apartment listing.",
        timestamp: "10:30 AM",
        status: "read",
        type: "text"
      },
      {
        id: 2,
        senderId: "agent",
        content: "Hello Sarah! Thank you for your interest. I'd be happy to help you with that property. Here are the details...",
        timestamp: "10:32 AM",
        status: "read",
        type: "text"
      },
      {
        id: 3,
        senderId: "client",
        content: "Thank you for the property details. When can we schedule a viewing?",
        timestamp: "10:45 AM",
        status: "delivered",
        type: "text"
      }
    ]
  },
  {
    id: 2,
    clientName: "Michael Chen",
    clientAvatar: "https://randomuser.me/api/portraits/men/2.jpg",
    lastMessage: "Perfect! See you tomorrow at 2 PM.",
    timestamp: "1 hour ago",
    unreadCount: 0,
    isOnline: false,
    propertyInterest: "Modern Beach House",
    clientPhone: "+1 (555) 987-6543",
    messages: [
      {
        id: 1,
        senderId: "agent",
        content: "Hi Michael! How about tomorrow at 2 PM for the beach house viewing?",
        timestamp: "Yesterday 4:20 PM",
        status: "read",
        type: "text"
      },
      {
        id: 2,
        senderId: "client",
        content: "Perfect! See you tomorrow at 2 PM.",
        timestamp: "Yesterday 4:25 PM",
        status: "read",
        type: "text"
      }
    ]
  },
  {
    id: 3,
    clientName: "Emily Rodriguez",
    clientAvatar: "https://randomuser.me/api/portraits/women/3.jpg",
    lastMessage: "Could you send me the floor plans?",
    timestamp: "3 hours ago",
    unreadCount: 1,
    isOnline: true,
    propertyInterest: "Suburban Family Home",
    clientPhone: "+1 (555) 456-7890",
    messages: [
      {
        id: 1,
        senderId: "client",
        content: "Hi! I saw your listing for the family home. It looks perfect for us!",
        timestamp: "Today 2:15 PM",
        status: "read",
        type: "text"
      },
      {
        id: 2,
        senderId: "agent",
        content: "That's wonderful! I'd love to show you around. It's a great property for families.",
        timestamp: "Today 2:18 PM",
        status: "read",
        type: "text"
      },
      {
        id: 3,
        senderId: "client",
        content: "Could you send me the floor plans?",
        timestamp: "Today 3:30 PM",
        status: "delivered",
        type: "text"
      }
    ]
  },
  {
    id: 4,
    clientName: "David Wilson",
    clientAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
    lastMessage: "Thanks for the virtual tour link!",
    timestamp: "1 day ago",
    unreadCount: 0,
    isOnline: false,
    propertyInterest: "Urban Loft Space",
    clientPhone: "+1 (555) 321-0987",
    messages: [
      {
        id: 1,
        senderId: "agent",
        content: "Here's the virtual tour link for the loft: https://virtualtour.com/loft123",
        timestamp: "Yesterday 1:00 PM",
        status: "read",
        type: "text"
      },
      {
        id: 2,
        senderId: "client",
        content: "Thanks for the virtual tour link!",
        timestamp: "Yesterday 1:15 PM",
        status: "read",
        type: "text"
      }
    ]
  }
];

const AgentMessages = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedConversation]);

  const filteredConversations = conversations.filter(conv =>
    conv.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.propertyInterest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage = {
        id: selectedConversation.messages.length + 1,
        senderId: "agent",
        content: messageInput,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: "sent",
        type: "text"
      };
      
      // In a real app, you'd update the conversation in your state management
      console.log("Sending message:", newMessage);
      setMessageInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const formatTimestamp = (timestamp) => {
    return timestamp;
  };

  const getMessageStatusIcon = (status) => {
    switch (status) {
      case "sent": return <FaCheck className="text-gray-400 text-xs" />;
      case "delivered": return <FaCheckDouble className="text-gray-400 text-xs" />;
      case "read": return <FaCheckDouble className="text-blue-500 text-xs" />;
      default: return <FaClock className="text-gray-400 text-xs" />;
    }
  };

  const totalUnreadMessages = conversations.reduce((total, conv) => total + conv.unreadCount, 0);

  return (
    <div className="h-[calc(100vh-200px)] bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex h-full">
        {/* Conversations Sidebar */}
        <div className="w-1/3 border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#091a2b]">Messages</h2>
              <div className="flex items-center gap-2">
                <span className="bg-[#0284c7] text-white text-xs px-2 py-1 rounded-full">
                  {totalUnreadMessages} unread
                </span>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <FaFilter className="text-[#64748b]" />
                </button>
              </div>
            </div>
            
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#64748b]" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedConversation.id === conversation.id ? 'bg-blue-50 border-r-2 border-r-[#0284c7]' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <img
                      src={conversation.clientAvatar}
                      alt={conversation.clientName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {conversation.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-[#091a2b] truncate">
                        {conversation.clientName}
                      </h3>
                      <span className="text-xs text-[#64748b]">
                        {conversation.timestamp}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <FaBuilding className="text-[#0284c7] text-xs" />
                      <span className="text-xs text-[#0284c7] truncate">
                        {conversation.propertyInterest}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-[#64748b] truncate">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unreadCount > 0 && (
                        <span className="bg-[#0284c7] text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                          {conversation.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={selectedConversation.clientAvatar}
                        alt={selectedConversation.clientName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {selectedConversation.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#091a2b]">
                        {selectedConversation.clientName}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#64748b]">
                          {selectedConversation.isOnline ? 'Online' : 'Offline'}
                        </span>
                        <span className="text-sm text-[#0284c7]">
                          • {selectedConversation.propertyInterest}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <FaPhone className="text-[#0284c7]" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <FaVideo className="text-[#0284c7]" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <FaEllipsisV className="text-[#64748b]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                <div className="space-y-4">
                  {selectedConversation.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.senderId === 'agent' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.senderId === 'agent'
                            ? 'bg-[#0284c7] text-white'
                            : 'bg-white text-[#091a2b] border border-gray-200'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <div
                          className={`flex items-center justify-between mt-1 text-xs ${
                            message.senderId === 'agent' ? 'text-blue-100' : 'text-[#64748b]'
                          }`}
                        >
                          <span>{formatTimestamp(message.timestamp)}</span>
                          {message.senderId === 'agent' && (
                            <span className="ml-2">
                              {getMessageStatusIcon(message.status)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleFileUpload}
                    className="p-2 hover:bg-gray-100 rounded-lg text-[#64748b]"
                  >
                    <FaFile />
                  </button>
                  <button
                    onClick={handleFileUpload}
                    className="p-2 hover:bg-gray-100 rounded-lg text-[#64748b]"
                  >
                    <FaImage />
                  </button>
                  <div className="flex-1 relative">
                    <textarea
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
                      rows="1"
                    />
                  </div>
                  <button
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="p-2 hover:bg-gray-100 rounded-lg text-[#64748b]"
                  >
                    <FaSmile />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={!messageInput.trim()}
                    className="p-2 bg-[#0284c7] text-white rounded-lg hover:bg-[#0369a1] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                onChange={(e) => {
                  // Handle file upload
                  console.log("Files selected:", e.target.files);
                }}
              />
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="text-6xl text-[#e0f2fe] mb-4">💬</div>
                <h3 className="text-xl font-semibold text-[#091a2b] mb-2">
                  Select a conversation
                </h3>
                <p className="text-[#64748b]">
                  Choose a conversation from the sidebar to start messaging.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentMessages;
