const codeMonk = [
  [
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
              Little Monk & Good Strings
              `,
      solution: `
#include <iostream>
#include <bits/stdc++.h>
#include <string.h>
using namespace std;

int maxGood(string s, int n){
    unordered_set<char> hash = {'a', 'e', 'i', 'o', 'u'};
    int res = 0, cnt = 0;
    for(int i=0; i<n; i++){
        if(hash.find(s[i]) != hash.end()){
            cnt++;
        } else {
            res = max(res, cnt);
            cnt = 0;
        }
    }
    res = max(res, cnt);
    return res;
}

int main(){
    string s;
    cin >> s;
    int res = 0;
    int n = s.size();
    cout << maxGood(s, n) << "\n";
}
              `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
          Initailizing 
          `,
        },
        {
          from: 3,
          to: 5,
          content: `
          Initailizing fast ptr and slow ptr to head
          `,
        },
        {
          from: 8,
          to: 13,
          content: `
          Running while loop
          `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
          Printing the data
          `,
        },
      ],
    },
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
          Monk & Inversions
          `,
      solution: `
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int isGreater(vector<vector<int>>& matrix, int x1, int y1, int n){
    int res = 0;
    for(int x2=x1; x2<n; x2++){
        for(int y2=y1; y2<n; y2++){
            if(matrix[x1][y1] > matrix[x2][y2]){
                res++;
            }
        }
    }
    return res;
}

int main(){
    int t;
    cin >> t;
    while(t--){
        int n;
        cin >> n;
        vector<vector<int>> matrix(n, vector<int>(n, 0));
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                cin >> matrix[i][j];
            }
        }
        int res = 0;
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                res += isGreater(matrix, i, j, n);
            }
        }
        cout << res << "\n";
    }
}
          `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
      Initailizing 
      `,
        },
        {
          from: 3,
          to: 5,
          content: `
      Initailizing fast ptr and slow ptr to head
      `,
        },
        {
          from: 8,
          to: 13,
          content: `
      Running while loop
      `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
      Printing the data
      `,
        },
      ],
    },
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
          Monk & Rotation
          `,
      solution: `
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main(){
    int t;
    cin >> t;
    while(t--){
        int n, k;
        cin >> n >> k;
        k = k % n;
        vector<int> v(n);
        for(int i=0; i<n; i++){
            cin >> v[i];
        }
        vector<int> res;
        for(int i=n-k; i<n; i++){
            res.push_back(v[i]);
        }
        for(int i=0; i<n-k; i++){
            res.push_back(v[i]);
        }
        for(int i=0; i<res.size(); i++){
            cout << res[i] << " ";
        }
        cout << "\n";
    }
}
          `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
      Initailizing 
      `,
        },
        {
          from: 3,
          to: 5,
          content: `
      Initailizing fast ptr and slow ptr to head
      `,
        },
        {
          from: 8,
          to: 13,
          content: `
      Running while loop
      `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
      Printing the data
      `,
        },
      ],
    },
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
            Monk & Welcome Problem
            `,
      solution: `
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin >> n;
    vector<int> x(n, 0);
    vector<int> y(n, 0);
    for(int i=0; i<n; i++){
        cin >> x[i];
    }
    for(int j=0; j<n; j++){
        cin >> y[j];
    }
    vector<int> res(n, 0);
    for(int k=0; k<n; k++){
        res[k] = x[k] + y[k];
    }
    for(int r : res){
        cout << r << " ";
    }
}
            `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
        Initailizing 
        `,
        },
        {
          from: 3,
          to: 5,
          content: `
        Initailizing fast ptr and slow ptr to head
        `,
        },
        {
          from: 8,
          to: 13,
          content: `
        Running while loop
        `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
        Printing the data
        `,
        },
      ],
    },
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
            Monk teaches Palindrome
            `,
      solution: `
#include <iostream>
#include <string.h>
#include <bits/stdc++.h>
using namespace std;

int main(){
    int t;
    cin >> t;
    while(t--){
        string s;
        cin >> s;
        int n = s.size();
        string res1 = "YES";
        if(n % 2 == 0){
            res1 += " EVEN";
        } else {
            res1 += " ODD";
        }
        int i = 0;
        int j = n-1;
        while(i < j){
            if(s[i] != s[j]){
                res1 = "NO";
                break;
            }
            i++;
            j--;
        }
        cout << res1 << "\n";
    }
} 
            `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
        Initailizing 
        `,
        },
        {
          from: 3,
          to: 5,
          content: `
        Initailizing fast ptr and slow ptr to head
        `,
        },
        {
          from: 8,
          to: 13,
          content: `
        Running while loop
        `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
        Printing the data
        `,
        },
      ],
    },
  ],
  [
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
          Monk & Modulo Based Sorting
          `,
      solution: `
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main(){
    int n, k;
    cin >> n >> k;
    vector<int> v(n);
    for(int i=0; i<n; i++){
        cin >> v[i];
    }
    struct Local {
        Local(int paramA) { this->paramA = paramA; }
        bool operator () (int i, int j) {
            int x = i % paramA;
            int y = j % paramA;
            return x < y;
        }
        int paramA;
    };
    stable_sort(v.begin(), v.end(), Local(k));
    for(int i=0; i<n; i++){
        cout << v[i] << " ";
    }
}
          `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
      Initailizing 
      `,
        },
        {
          from: 3,
          to: 5,
          content: `
      Initailizing fast ptr and slow ptr to head
      `,
        },
        {
          from: 8,
          to: 13,
          content: `
      Running while loop
      `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
      Printing the data
      `,
        },
      ],
    },
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
          Monk & Nice Strings
          `,
      solution: `
#include <iostream>
#include <bits/stdc++.h>
#include <string.h>
using namespace std;

int main(){
    int n;
    cin >> n;
    multiset<string> strSet;
    for(int i=0; i<n; i++){
        string s;
        cin >> s;
        strSet.insert(s);
        int res = 0;
        for(auto str : strSet){
            if(str == s){
                break;
            }
            res++;
        }
        cout <<  res << "\n";
    }
}
          `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
      Initailizing 
      `,
        },
        {
          from: 3,
          to: 5,
          content: `
      Initailizing fast ptr and slow ptr to head
      `,
        },
        {
          from: 8,
          to: 13,
          content: `
      Running while loop
      `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
      Printing the data
      `,
        },
      ],
    },
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
          Monk & Sorting Algorithm
          `,
      solution: `
#include <iostream>
#include <cmath>
#include <bits/stdc++.h>
#include <string.h>
using namespace std;

bool sortbysec(const pair<string,int> &a, const pair<string,int> &b) 
{ 
    return (a.second < b.second); 
} 

int main(){
    ios_base::sync_with_stdio(false);
    int n;
    cin >> n;
    vector<string> v(n);
    float it = 0;
    for(int i=0; i<n; i++){
        cin >> v[i];
        if(v[i].size() > it){
            it = v[i].size();
        }
    }
    it = (float)it / 5;
    it = ceil(it);
    int cnt = 1;
    while(it > 0){
        vector<pair<string, int>> radix(n);
        for(int i=0; i<n; i++){
            int start = v[i].size() - cnt*5;
            int end = start + 4;
            int num = 0;
            if(start < 0){
                if(end >= 0){
                    string str = v[i].substr(0, end+1);
                    num = stoi(str);
                }
            } else {
                string str = v[i].substr(start, 5);
                num = stoi(str);
            }
            radix[i].first = v[i];
            radix[i].second = num;
        }
        stable_sort(radix.begin(), radix.end(), sortbysec);
        for(int i=0; i<n; i++){
            v[i] = radix[i].first;
            cout << v[i] << " ";
        }
        cout << "\n";
        it--;
        cnt++;
    }
}
          `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
      Initailizing 
      `,
        },
        {
          from: 3,
          to: 5,
          content: `
      Initailizing fast ptr and slow ptr to head
      `,
        },
        {
          from: 8,
          to: 13,
          content: `
      Running while loop
      `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
      Printing the data
      `,
        },
      ],
    },
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
            Monk & Suffix Sort
            `,
      solution: `
#include <iostream>
#include <bits/stdc++.h>
#include <string.h>
using namespace std;

int main(){
    string s;
    int k;
    cin >> s >> k;
    int n = s.size();
    vector<string> suffices;
    for(int len=1; len<=n; len++){
        suffices.push_back(s.substr(n-len, len));
    }
    sort(suffices.begin(), suffices.end());
    cout << suffices[k-1] << "\n";
}
            `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
        Initailizing 
        `,
        },
        {
          from: 3,
          to: 5,
          content: `
        Initailizing fast ptr and slow ptr to head
        `,
        },
        {
          from: 8,
          to: 13,
          content: `
        Running while loop
        `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
        Printing the data
        `,
        },
      ],
    },
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
            Monk being Monitor
            `,
      solution: `
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main(){
    int t;
    cin >> t;
    while(t--){
        int n;
        cin >> n;
        int res = 1;
        unordered_map<int, int> height;
        for(int i=0; i<n; i++){
            int h;
            cin >> h;
            height[h]++;
        }
        vector<int> v;
        for(auto h : height){
            v.push_back(h.second);
        }
        sort(v.begin(), v.end(), greater<int>());
        if(n > 1){
            if((v[0]-v[v.size()-1]) > 0){
                res = v[0]-v[v.size()-1];
            }
        }
        cout << res << "\n";
    }
}
            `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
        Initailizing 
        `,
        },
        {
          from: 3,
          to: 5,
          content: `
        Initailizing fast ptr and slow ptr to head
        `,
        },
        {
          from: 8,
          to: 13,
          content: `
        Running while loop
        `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
        Printing the data
        `,
        },
      ],
    },
  ],
  [
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
          Little Monks & Mountains
          `,
      solution: `
#include <iostream>
#include <bits/stdc++.h>
#define ll long long int 
using namespace std;

ll binarySearch(vector<pair<ll, ll>>& arr, ll l, ll r, ll x) 
{ 
    ll m;
    while (l <= r) { 
        m = l + (r - l) / 2; 
        if (arr[m].first == x) 
            return m; 
        if (arr[m].first < x) 
            l = m + 1; 
        else
            r = m - 1; 
    } 
    return l; 
} 

int main(){
    ll n, q;
    cin >> n >> q;
    vector<pair<ll, ll>> v(n);
    vector<pair<ll , ll>> dist(n);
    for(ll i=0; i<n; i++){
        ll l, r;
        cin >> l >> r;
        v[i] = {l, r};
        dist[i].first = r-l+1;
        dist[i].second = i;
    }
    ll sum = 0;
    for(ll i=0; i<dist.size(); i++){
        sum += dist[i].first;
        dist[i].first = sum;
    }
    while(q--){
        ll x;
        cin >> x;
        ll target = binarySearch(dist, 0, dist.size()-1, x);
        if(dist[target].first == x){
            ll idx = dist[target].second;
            ll rans = v[idx].second;
            cout << rans << "\n";
        } else {
            ll diff = dist[target].first - x;
            ll idx = dist[target].second;
            ll rans = v[idx].second-diff;
            cout << rans << "\n";
        }
    }
}
          `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
      Initailizing 
      `,
        },
        {
          from: 3,
          to: 5,
          content: `
      Initailizing fast ptr and slow ptr to head
      `,
        },
        {
          from: 8,
          to: 13,
          content: `
      Running while loop
      `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
      Printing the data
      `,
        },
      ],
    },
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
          Monk & Circular Distance
          `,
      solution: `
#include <iostream>
#include <cmath> 
#define ll long long int
#include <bits/stdc++.h>
using namespace std;

ll binarySearch(vector<pair<ll,ll>>& arr, ll l, ll r, ll x) 
{ 
    ll m;
    while (l <= r) { 
        m = l + (r - l) / 2; 
        if (arr[m].first == x) 
            return m; 
        if (arr[m].first < x) 
            l = m + 1; 
        else
            r = m - 1; 
    } 
    return r;
} 

void accumulateSum(vector<pair<ll,ll>>& v, vector<ll>& accSum){
    ll lsum = 0;
    for(ll i=0; i<v.size(); i++){
        lsum += v[i].second;
        accSum[i] = lsum;
    }
}

int main(){
    ll n;
    cin >> n;
    unordered_map<ll, ll> hash;
    for(ll i=0; i<n; i++){
        ll x, y;
        cin >> x >> y;
        ll d = x*x + y*y;
        hash[d]++;
    }
    vector<pair<ll, ll>> distances;
    for(auto h : hash){
        distances.push_back(make_pair(h.first, h.second));
    }
    sort(distances.begin(), distances.end());
    ll q;
    cin >> q;
    vector<ll> npoints(distances.size());
    accumulateSum(distances, npoints);
    while(q--){
        ll r;
        cin >> r;
        if(r > 2*pow(10, 9)){
            cout << npoints[npoints.size()-1] << "\n";
            continue;
        }
        ll target = binarySearch(distances, 0, distances.size()-1, r*r);
        if(target < 0){
            cout << 0 << "\n";
        } else if(target > distances.size()-1){
            cout << npoints[npoints.size()-1] << "\n";
        } else {
            cout << npoints[target] << "\n";
        }
    }
}
          `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
      Initailizing 
      `,
        },
        {
          from: 3,
          to: 5,
          content: `
      Initailizing fast ptr and slow ptr to head
      `,
        },
        {
          from: 8,
          to: 13,
          content: `
      Running while loop
      `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
      Printing the data
      `,
        },
      ],
    },
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
          Monk & Search
          `,
      solution: `
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int binarySearch(vector<pair<int,int>>& arr, int l, int r, int x) 
{ 
    int m;
    while (l <= r) { 
        m = l + (r - l) / 2; 
        if (arr[m].first == x) 
            return m; 
        if (arr[m].first < x) 
            l = m + 1; 
        else
            r = m - 1; 
    } 
    return m; 
} 

void accumulateSum(vector<pair<int,int>>& v, vector<int>& accSum){
    int rsum = 0;
    for(int i=v.size()-1; i>=0; i--){
        rsum += v[i].second;
        accSum[i] = rsum;
    }
}

int main(){
    ios_base::sync_with_stdio(false);
    int n;
    cin >> n;
    vector<pair<int, int>> v(n);
    unordered_map<int, int> hash;
    for(int i=0; i<n; i++){
        cin >> v[i].first;
        hash[v[i].first]++;
    }
    sort(v.begin(), v.end());
    v.erase(unique( v.begin(), v.end() ), v.end());
    for(int i=0; i<v.size(); i++){
        v[i].second = hash[v[i].first];
    }
    vector<int> accSum(v.size());
    accumulateSum(v, accSum);
    int q;
    cin >> q;
    while(q--){
        int opr;
        cin >> opr;
        int data;
        cin >> data;
        int target = binarySearch(v, 0, v.size()-1, data);
        if(opr == 0){
            if(v[target].first >= data){
                cout << accSum[target] << "\n";
            } else {
                if(target+1 >= v.size()){
                    cout << 0 << "\n";
                } else {
                    cout << accSum[target+1] << "\n";
                }
            }
        } else {
            if(v[target].first > data){
                cout << accSum[target]  << "\n";
            } else {
                if(target+1 >= v.size()){
                    cout << 0 << "\n";
                } else {
                    cout << accSum[target+1] << "\n";
                }
            }
        }
    }
}
          `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
      Initailizing 
      `,
        },
        {
          from: 3,
          to: 5,
          content: `
      Initailizing fast ptr and slow ptr to head
      `,
        },
        {
          from: 8,
          to: 13,
          content: `
      Running while loop
      `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
      Printing the data
      `,
        },
      ],
    },
    {
      tag: "easy",
      link:
        "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
      title: `
            Monk takes a Walk
            `,
      solution: `
#include <iostream>
#include <bits/stdc++.h>
#include <string.h>
using namespace  std;

int main(){
    int t;
    cin >> t;
    unordered_set<char> hash= {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
    while(t--){
        int res = 0;
        string s;
        cin >> s;
        for(int i=0; i<s.size(); i++){
            if(hash.find(s[i]) != hash.end()){
                res++;
            }
        }
        cout << res << "\n";
    }
}
            `,
      explanation: [
        {
          from: 0,
          to: 2,
          content: `
        Initailizing 
        `,
        },
        {
          from: 3,
          to: 5,
          content: `
        Initailizing fast ptr and slow ptr to head
        `,
        },
        {
          from: 8,
          to: 13,
          content: `
        Running while loop
        `,
          content: "Running while loop",
        },
        {
          from: 13,
          to: 14,
          content: `
        Printing the data
        `,
        },
      ],
    },
  ],
];

module.exports = {
  codeMonk,
};
