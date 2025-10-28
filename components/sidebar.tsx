'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Templates', href: '/templates' },
    { label: 'Cameras', href: '/cameras' },
    { label: 'Lenses', href: '/lenses' },
    { label: 'Accessories', href: '/accessories' },
    { label: 'Recommendations', href: '/recommendations' },
    { label: 'Compare', href: '/compare' },
    { label: 'Your List', href: '/your-list', badge: 0 },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="w-[220px] bg-white border-r border-[#e5e5e5] flex flex-col py-6 flex-shrink-0">
      {/* Logo */}
      <div className="px-5 pb-5 mb-6">
        <h1 className="text-[20px] font-bold text-[#171717] tracking-tight">
          LIST
        </h1>
        <p className="text-[13px] text-[#737373] mt-1">
          Cinema Equipment Database
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        {navItems.map((item, index) => {
          // Add separators
          const showSeparator = index === 0 || index === 4 || index === 6;

          return (
            <div key={item.href}>
              {showSeparator && index !== 0 && (
                <div className="h-5" />
              )}
              <Link
                href={item.href}
                className={`
                  flex items-center justify-between px-3 py-2 rounded-md text-[14px] font-medium mb-0.5 transition-all
                  ${
                    isActive(item.href)
                      ? 'bg-[#171717] text-white'
                      : 'text-[#737373] hover:bg-[#f5f5f5] hover:text-[#171717]'
                  }
                `}
              >
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span
                    className={`
                      inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-semibold transition-all
                      ${
                        isActive(item.href)
                          ? 'bg-white text-[#171717]'
                          : 'bg-[#171717] text-white'
                      }
                    `}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
