import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container-main text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Check size={32} className="text-white" />
          </div>
          <h2 className="heading-2 text-white mb-4">Thank You!</h2>
          <p className="body-text text-white/90">
            You've successfully subscribed to our newsletter. Get ready for exclusive deals and early access to new releases!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="container-main text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Mail size={32} className="text-white" />
          </div>
          
          <h2 className="heading-2 text-white mb-4">Stay in the Game</h2>
          <p className="body-text text-white/90 mb-8">
            Get exclusive access to new releases, special deals, and TCG tips straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          <p className="caption text-white/70 mt-4">
            By subscribing, you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};